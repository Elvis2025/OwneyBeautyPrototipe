# OWNEY BEAUTY — Prototipo Angular

Marketplace y red social frontend para descubrir y reservar profesionales de
belleza en República Dominicana. Todos los perfiles, pagos y documentos son
datos ficticios de demostración; el proyecto no utiliza backend.

## Requisitos

- Node.js 20 LTS
- npm 10 o superior

## Ejecutar localmente

```bash
npm install
npm start
```

Abre `http://localhost:4200`. No es necesario instalar Angular CLI globalmente:
`npm start` utiliza el ejecutable local incluido en las dependencias de
desarrollo. Si se desea ejecutar el CLI directamente, debe usarse `npx ng
serve`, no `ng serve` sin una instalación global.

## Comandos

```bash
npm start       # servidor de desarrollo
npm run build   # compilación optimizada de producción
npm test        # pruebas unitarias
```

Los datos modificables se guardan en LocalStorage. La ruta `/settings` incluye
una acción confirmada para restaurar los datos iniciales de demostración.
