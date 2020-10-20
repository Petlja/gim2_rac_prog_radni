@echo off
if exist .env (
    echo.
    echo *** Okruzenje je vec bilo podeseno, postoji folder .env
    echo *** Jupyter mozete pokrenuti tako sto pokreneta START_JUPYTER.BAT u istom ovom folderu.
    echo.
    goto end
)
setlocal
set MSG1=
set MSG2=
set PY_MIN=3.6
set PY_MAX=3.8
set PY_TEST_VER_LN="import sys; ('%PY_MIN%' <= '%%s.%%s' %% sys.version_info[0:2] <= '%PY_MAX%') or quit(100)" 
python -c %PY_TEST_VER_LN% 2>nul
if errorlevel 101 goto python_not_in_path
set MSG1=!!! Postoji komanda 'python' ali se njom ne pokrece Python %PY_MIN% do %PY_MAX%
if errorlevel 1 goto not_in_path
set PY_CMD=python
goto py_found

:python_not_in_path
py -3 -c %PY_TEST_VER_LN% 2>nul
if errorlevel 101 goto err_not_found
set MSG2=!!! Postoji komanda 'py' ali se komandom 'py -3' ne pokrece Python %PY_MIN% do %PY_MAX%
if errorlevel 1 goto err_not_found
set PY_CMD=py -3
goto py_found

:err_not_found
echo.
if not "%MSG1%"=="" echo %MSG1%
if not "%MSG2%"=="" echo %MSG2%
if "%MSG1%"=="" if "%MSG2%"=="" echo !!! Nije pronadjen instaliran Python (niti komanda 'python' niti komanda 'py')
echo.
goto end

:py_found
@echo on
%PY_CMD% -m venv .env
call .env\Scripts\activate.bat
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
call .env\Scripts\deactivate.bat
echo @echo off > START_JUPYTER.BAT
echo call .env\Scripts\activate.bat >> START_JUPYTER.BAT
echo jupyter notebook >> START_JUPYTER.BAT
echo pause >> START_JUPYTER.BAT
echo.
echo *** Podesavanje je uspesno zavrceno. 
echo *** Jupyter mozete pokrenuti tako sto pokreneta START_JUPYTER.BAT u istom ovom folderu.
echo.

:end
pause
