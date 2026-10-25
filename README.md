#  EcoHuerta – Filterable Plant List
**Semana 4 – React Fundamentos (Vite + React + TailwindCSS)**  
Proyecto educativo basado en los lineamientos de **React.dev**, **Vite Docs**, **Tailwind CSS Docs** y **MDN Web Docs**.

---

##  1. Descripción general
EcoHuerta es una **SPA (Single Page Application)** desarrollada con **React 18+** y **Vite**.  
El objetivo es aprender los fundamentos del enfoque declarativo de React, el manejo del estado con Hooks y la composición de componentes reutilizables.

La aplicación muestra una lista de cultivos con información básica y un contador interactivo.  
Además, se añadieron **tres nuevos componentes personalizados** para extender la funcionalidad sin romper la coherencia del diseño.

---

## ⚙️ 2. Tecnologías usadas
-  **React 18+** (Functional Components + Hooks)
-  **Vite** (entorno de desarrollo rápido con HMR)
- **Tailwind CSS** (estilos utilitarios y responsive)
-  **JSX** (sintaxis declarativa para UI)
-  **ES Modules (ESM)** nativos

---

## 🧩 3. Estructura del proyecto
```
src/
├── components/
│   ├── Header.jsx
│   ├── Card.jsx
│   ├── Counter.jsx
│   ├── PlantFilter.jsx     ← Nuevo componente
│   ├── Footer.jsx          ← Nuevo componente
│   └── PlantInfo.jsx       ← Nuevo componente
├── assets/
│   └── images/
├── App.jsx
└── main.jsx
```

---

## 🧠 4. Análisis del proyecto

### 🔹 1. ¿Cómo se aplica el flujo de datos unidireccional?
React implementa un **flujo de datos de arriba hasta abajo (top-down)**.  
El componente `App` actúa como **padre**, pasando información a los hijos (`Header`, `Card`, `Counter`, etc.) mediante **props**.  
Los hijos **nunca modifican directamente** los datos del padre; en su lugar, comunican cambios a través de funciones callback (si fuera necesario).  
Este modelo mantiene la UI predecible, ya que **el estado vive en un solo lugar** y la interfaz se actualiza automáticamente según esos datos.

---

### 🔹 2. ¿Qué papel cumple el estado (useState) en los componentes?
El Hook `useState()` permite que los componentes funcionales recuerden valores entre renderizados.  
Por ejemplo:
- En `Counter.jsx`, `useState` guarda el valor actual del contador (`count`) y vuelve a renderizar el componente cada vez que cambia.  
- En `PlantFilter.jsx`, el estado se usa para almacenar el texto del filtro y renderizar dinámicamente las plantas que coinciden.  

Gracias a esto, React **reacciona a los cambios de estado** sin manipular el DOM directamente.

---

### 🔹 3. ¿Por qué es importante separar la UI en componentes reutilizables y puros?
Dividir la interfaz en **componentes pequeños y enfocados** facilita:
- La **reutilización** del código (un mismo `Card` puede mostrar distintos cultivos).  
- La **mantenibilidad**, ya que cada pieza tiene una sola responsabilidad.  
- La **testabilidad**, porque un componente puro siempre devuelve la misma UI para las mismas props.  

Además, esto sigue el principio de **“un componente = una función del UI”**, promovido por React.

---

### 🔹 4. ¿Qué ventajas aporta el uso de JSX declarativo frente al DOM imperativo?
JSX permite **describir qué se quiere mostrar**, no cómo hacerlo.  
React se encarga de actualizar solo lo necesario en el DOM mediante el **Virtual DOM**, optimizando el rendimiento.  

Ejemplo:
```jsx
// Declarativo (React)
<button onClick={() => setCount(count + 1)}>+</button>
```
vs.
```js
// Imperativo (DOM tradicional)
const btn = document.createElement("button");
btn.addEventListener("click", () => {
  count++;
  document.querySelector("#value").innerText = count;
});
```
El enfoque declarativo hace que la UI sea **más predecible, limpia y fácil de mantener**.

---

### 🔹 5. ¿Cómo podrías mejorar la app agregando tres componentes nuevos?
Se agregaron tres componentes complementarios, manteniendo la coherencia visual con Tailwind:

#### 🧩 `PlantFilter.jsx`
- Permite buscar cultivos por nombre en tiempo real.  
- Usa `useState` para manejar el valor del input y filtrar dinámicamente la lista de plantas.  

#### 🧩 `PlantInfo.jsx`
- Muestra información detallada de una planta seleccionada (nombre, cuidados, clima, etc.).  
- Recibe los datos por `props` desde el componente padre.

#### 🧩 `Footer.jsx`
- Añade un pie de página simple con créditos y el año actual.  
- Mejora la estructura general de la SPA y aporta un cierre visual al diseño.

---

## 🌐 5. Instalación y ejecución

```bash
# Crear proyecto
npm create vite@latest ecohuerta -- --template react

# Instalar dependencias
cd ecohuerta
npm install

# Iniciar servidor local
npm run dev
```

Abrir en el navegador: [http://localhost:5173](http://localhost:5173)

---

## 🧩 6. Resultados esperados
- SPA funcional con estructura modular y diseño responsive.  
- Flujo de datos unidireccional controlado.  
- Componentes reutilizables, declarativos y bien documentados.  
- Experiencia fluida gracias a Vite y Tailwind.

---

##  Conclusión
El proyecto **EcoHuerta** demuestra los pilares del desarrollo moderno con React:
- **Declaratividad** y **flujo unidireccional**.  
- **Componentización** y **reutilización de UI**.  
- **Estado reactivo** con Hooks.  
- **Estilos limpios y consistentes** con TailwindCSS.  

React permite pensar en la UI como una **función del estado**, lo que hace que el código sea más intuitivo, escalable y mantenible.

---

### ✍️ Autor
**Oscar Torres Quintero** – Aprendiz SENA  
**analisis y desarrollo de software**
2025
