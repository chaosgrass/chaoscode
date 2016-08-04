@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin
choco install jdk
choco install notepadplusplus
choco install gradle
choco install sourcetree
choco install emeditor
rem 安装groovy.esy语法文件
