# FM T&T Associated Group — MVP Angular

Landing page responsive para internet rural y soluciones tecnológicas. Incluye catálogo, cobertura, planes por zona, flujo de solicitud demostrativo y panel local de administración.

## Requisitos
- Node.js compatible con Angular 20 (recomendado Node 22.12+ o 20.19+).
- npm.

## Ejecutar
```bash
npm install
npm start
```
Abrir `http://localhost:4200`.

## Compilar
```bash
npm run build
```

## Panel de administración de demostración
Botón **Administración** al final del footer.
Contraseña de demo: `FMAdmin2026!`

**Advertencia:** el panel no es seguro para producción. No hay backend ni base de datos; los cambios solo viven en memoria y se pierden al recargar. No publicar el panel ni usarlo con precios reales hasta implementar autenticación y persistencia del lado servidor.

## Compras
La selección de plan abre un formulario y una pantalla final de demostración. No se realiza ningún cobro, no se envía una orden y no se almacena información personal. La pantalla de éxito aclara esta limitación.

## Antes de presentar al cliente
1. Sustituir las imágenes del hero en `src/styles.css` (señaladas con un comentario explícito en `app.component.html` y `styles.css`).
2. Confirmar el nombre legal/comercial y el logo original.
3. Confirmar los teléfonos, correo y canal oficial de WhatsApp.
4. Sustituir el iframe del mapa por el enlace oficial de Google Maps.
5. Revisar las tarifas con el cliente. Se copiaron los nombres, zonas y precios legibles de la imagen proporcionada; en zona 01 la imagen parece escribir “ENTERRRÍOS”, por eso se mantuvo ese texto en el título del plan, pero se usa “Entrerríos” en cobertura.
6. Los enlaces a fotografías del catálogo son imágenes ilustrativas externas; reemplazarlas por fotografías autorizadas de los productos/instalaciones.
7. Verificar los requisitos de accesibilidad, SEO técnico, textos legales y consentimiento antes de producción.

## Paleta
- Azul principal: `#3471E4`
- Azul oscuro: `#102B50`
- Amarillo: `#FFCB37`
- Rosa: `#F94D87`
- Fondo frío violeta/azulado: `#F7F8FC`

## SEO incluido
Idioma `es`, title, meta description, robots, theme color y Open Graph básicos. Para producción, añadir dominio canonical, sitemap.xml, robots.txt, favicon/logotipo real, datos estructurados LocalBusiness/Organization verificados y analítica consentida si corresponde.
