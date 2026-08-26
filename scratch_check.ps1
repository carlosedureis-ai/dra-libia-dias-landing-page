$text = Get-Content -Raw "assets/css/styles.css"
$open = 0
$lineNum = 1
$errors = @()

foreach ($line in ($text -split "`n")) {
    $chars = $line.ToCharArray()
    foreach ($ch in $chars) {
        if ($ch -eq '{') { $open++ }
        if ($ch -eq '}') { 
            $open-- 
            if ($open -lt 0) {
                $errors += "Extra closing brace at line $lineNum : $line"
                $open = 0
            }
        }
    }
    $lineNum++
}

Write-Output "Errors: $($errors -join '; ')"
Write-Output "Unclosed braces remaining: $open"
Write-Output "Total lines: $lineNum"
