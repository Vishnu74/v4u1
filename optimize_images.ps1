
# Load required assemblies
Add-Type -AssemblyName System.Drawing

# Configuration
$sourceDir = "public/assets/Model snaps"
$maxWidth = 1600
$quality = 85

# Ensure source directory exists
if (-not (Test-Path $sourceDir)) {
    Write-Error "Source directory not found: $sourceDir"
    exit 1
}

# Get all PNG files
$images = Get-ChildItem -Path $sourceDir -Recurse -Filter "*.png"

foreach ($img in $images) {
    Write-Host "Processing: $($img.Name)"
    
    try {
        # Load image
        $originalImage = [System.Drawing.Bitmap]::FromFile($img.FullName)
        
        # Calculate new dimensions
        $newWidth = $originalImage.Width
        $newHeight = $originalImage.Height
        
        if ($originalImage.Width -gt $maxWidth) {
            $newWidth = $maxWidth
            $newHeight = [int]($originalImage.Height * ($maxWidth / $originalImage.Width))
        }
        
        # Create new resized bitmap
        $resizedImage = new-object System.Drawing.Bitmap $newWidth, $newHeight
        $graph = [System.Drawing.Graphics]::FromImage($resizedImage)
        $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graph.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $graph.DrawImage($originalImage, 0, 0, $newWidth, $newHeight)
        
        # Setup JPEG encoder
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, $quality)
        
        # Save as JPG
        $newPath = $img.FullName -replace '\.png$', '.jpg'
        $resizedImage.Save($newPath, $codec, $encoderParams)
        
        Write-Host "Created: $newPath"
        
        # Cleanup
        $originalImage.Dispose()
        $resizedImage.Dispose()
        $graph.Dispose()
    }
    catch {
        Write-Error "Failed to process $($img.Name): $_"
    }
}

Write-Host "Optimization Complete!"
