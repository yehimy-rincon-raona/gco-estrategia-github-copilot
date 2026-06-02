@echo off
title Actualizar presentacion GCO
echo.
echo  Generando presentacion-gco.html...
echo  (Incrustando fuentes e imagenes)
echo.
node "%~dp0exportar.js"
echo.
if %errorlevel% == 0 (
  echo  Presentacion actualizada correctamente.
  echo  Abre presentacion-gco.html para revisar o compartir.
) else (
  echo  ERROR: Asegurate de tener Node.js instalado.
  echo  Descargalo en https://nodejs.org
)
echo.
pause
