<?php
declare(strict_types=1);

$allowed = [
    'coconut-shampoo-1.webp',
    'coconut-shampoo-2.webp',
    'jojoba-oil-shampoo.webp',
    'moroccan-argan-oil-shampoo.webp',
    'tea-tree-extract-conditioner.webp',
    'rosemary-extract-conditioner.webp',
    'shea-butter-conditioner.webp',
    'moroccan-argan-oil-conditioner.webp',
];

$file = isset($_GET['file']) ? basename((string) $_GET['file']) : '';
if (!in_array($file, $allowed, true)) {
    http_response_code(404);
    exit('Image not found');
}

$localPath = __DIR__ . DIRECTORY_SEPARATOR . $file;
if (is_file($localPath)) {
    header('Content-Type: image/webp');
    header('Cache-Control: public, max-age=31536000, immutable');
    readfile($localPath);
    exit;
}

$bundlePath = __DIR__ . DIRECTORY_SEPARATOR . 'product-images.tgz.b64';
if (!is_file($bundlePath)) {
    http_response_code(404);
    exit('Image bundle not found');
}

$base64 = preg_replace('/\s+/', '', (string) file_get_contents($bundlePath));
$compressed = base64_decode($base64, true);
if ($compressed === false) {
    http_response_code(500);
    exit('Invalid image bundle');
}

$tar = gzdecode($compressed);
if ($tar === false) {
    http_response_code(500);
    exit('Unable to decompress image bundle');
}

$offset = 0;
$length = strlen($tar);
while ($offset + 512 <= $length) {
    $header = substr($tar, $offset, 512);
    $name = rtrim(substr($header, 0, 100), "\0 ");
    if ($name === '') {
        break;
    }

    $sizeText = trim(substr($header, 124, 12), "\0 ");
    $size = $sizeText === '' ? 0 : octdec($sizeText);
    $dataStart = $offset + 512;
    $basename = basename($name);

    if ($basename === $file) {
        $data = substr($tar, $dataStart, $size);
        @file_put_contents($localPath, $data, LOCK_EX);
        header('Content-Type: image/webp');
        header('Content-Length: ' . strlen($data));
        header('Cache-Control: public, max-age=31536000, immutable');
        echo $data;
        exit;
    }

    $offset = $dataStart + (int) (ceil($size / 512) * 512);
}

http_response_code(404);
exit('Image not found in bundle');
