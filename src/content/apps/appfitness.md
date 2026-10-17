---
name: AppFitness
tagline: Tu gimnasio, sin ruido.
summary: Registro de entrenamientos, rutinas, programas y peso corporal en una app Android hecha a mano. Funciona sin cuenta y sin conexión; la cuenta de Google es opcional y solo sirve para compartir rutinas.
releasesRepo: Rial-2004/Rial-2004.github.io
releaseTag: appfitness
apkFile: AppFitness.apk
icon: /appfitness-icon.svg
minAndroid: Android 14 o superior
order: 1
features:
  - title: "Registro de series"
    text: "Peso y repeticiones, calentamiento, series combinadas, peso corporal y PR, con autocompletado sobre un catálogo de unos 1300 ejercicios en español. La última vez que lo hiciste, a un toque."
  - title: "Rutinas y plan semanal"
    text: "Monta tus rutinas y asígnalas a los días de la semana; la app sabe qué toca hoy. Cada ejercicio puede tener hasta tres alternativas por si la máquina está ocupada."
  - title: "Programas"
    text: "Guarda semanas completas como programas (por ejemplo, «Hipertrofia 3 días» o «Mantenimiento») y cambia de uno a otro con un toque."
  - title: "Progreso"
    text: "Sesiones, series y volumen del mes comparados con el anterior, récords personales, series por músculo y evolución del peso corporal."
  - title: "Historial y calendario"
    text: "Asistencia de los últimos meses, detalle de cada día y opción de duplicar o mover entrenamientos."
  - title: "Seis widgets"
    text: "Hoy toca, Cardio y abdominales, Descanso con cuenta atrás, Récord de tu ejercicio, la Semana de un vistazo y el Resumen semanal, sin abrir la app."
  - title: "Perfil a tu gusto"
    text: "Foto, banner, Instagram y cumpleaños; recorte de imagen al estilo de las apps de mensajería y tema claro, oscuro o del sistema."
  - title: "Comunidad"
    text: "Comparte tus rutinas y añade las de otros usuarios. Es opcional, requiere iniciar sesión con Google y solo se comparten los ejercicios, no tus datos ni tu historial."
  - title: "Se actualiza sola"
    text: "La app avisa de las versiones nuevas y las descarga e instala desde dentro, verificando la firma antes de instalar."
  - title: "Tus datos son tuyos"
    text: "Base de datos local en el móvil y copia completa a un archivo para cambiar de móvil. Al actualizar conservas todo, aunque vengas de una versión antigua."
manual:
  - categoria: entrenar
    title: "Entender la pantalla «Hoy»"
    summary: "Es la pantalla de inicio: tu racha, la semana, lo que toca hoy, los hábitos rápidos y el historial."
    images: [/capturas/appfitness/hoy.webp, /capturas/appfitness/hoy-asistencia.webp]
    steps:
      - "Arriba ves tu nombre, la racha de semanas seguidas con actividad y cuándo fue tu último entreno."
      - "Los siete círculos son la semana en curso, y hoy va en ámbar. Si ya has registrado algo, el día se rellena."
      - "«Hoy toca» muestra la rutina que el plan semanal asigna a hoy. Púlsala para cambiarla solo por hoy."
      - "Más abajo está la asistencia de los últimos tres meses y una tarjeta por cada día con registros."
  - categoria: entrenar
    title: "Ver los ejercicios de la rutina de hoy"
    summary: "Consulta series, repeticiones y tu mejor marca antes de empezar."
    images: [/capturas/appfitness/ejercicios-rutina.webp]
    steps:
      - "En «Hoy», pulsa «Ejercicios de esta rutina»."
      - "Cada ejercicio muestra sus series, el rango de repeticiones y tu máximo."
      - "Si tiene alternativas, aparecen en «Si no puedes»."
  - categoria: entrenar
    title: "Registrar un ejercicio en la sesión"
    summary: "Apunta el peso y las repeticiones de cada serie justo después de hacerla."
    images: [/capturas/appfitness/registrar.webp, /capturas/appfitness/registrar-lleno.webp]
    steps:
      - "Pulsa el botón «+» de «Hoy»."
      - "Escribe el ejercicio y elígelo de la lista. Si hoy tienes rutina, te ofrece los ejercicios de esa rutina."
      - "Verás el objetivo de la rutina y «Última vez», con el botón «Usar» para copiar el peso."
      - "Rellena el peso y elige las repeticiones con un toque en cada serie. «+ Serie» añade otra e «Igualar» copia la primera a las demás."
      - "Pulsa «Registrar». Si superas tu mayor peso, la app te avisa con un nuevo récord."
    note: "Si escribes un nombre que no está en el catálogo, se guarda igualmente, pero sin ficha ni objetivo."
  - categoria: entrenar
    title: "Calentamiento, peso corporal y series combinadas"
    summary: "Opciones del editor de series para casos que no son «peso × repeticiones»."
    images: [/capturas/appfitness/registrar-lleno.webp]
    steps:
      - "«Calentamiento» añade una serie que no cuenta para récords ni para el volumen."
      - "El chip «Peso corporal» sirve para dominadas, fondos y similares."
      - "El botón «+» dentro de una serie crea una serie combinada, por ejemplo 10 repeticiones con un peso y 5 más con uno menor."
      - "El chip «PR» marca un intento máximo y pide el peso en «Peso PR (kg)»."
  - categoria: entrenar
    title: "Cardio y abdominales con un toque"
    summary: "Apunta un hábito diario sin registrar ejercicios."
    steps:
      - "En «Hoy», pulsa «Cardio» o «Abs». Pasa a «Hecho hoy» y suma a tu total."
      - "Solo cuenta uno de cada tipo por día. También puedes hacerlo desde el widget sin abrir la app."
      - "Estos hábitos cuentan para la racha de semanas."
  - categoria: entrenar
    title: "Editar, duplicar o mover un día"
    summary: "Corrige lo que apuntaste o repite un entrenamiento otro día."
    images: [/capturas/appfitness/dia-detalle.webp, /capturas/appfitness/registro-editar.webp]
    steps:
      - "Pulsa la tarjeta de un día en el historial de «Hoy»."
      - "Toca un ejercicio para editar sus series y pulsa «Guardar cambios». La «✕» lo elimina."
      - "«Duplicar rutina» copia todo el día a la fecha que elijas."
      - "«Cambiar fecha» mueve el día entero a otra fecha."
    note: "Si el día de destino ya tenía registros, los nuevos se añaden a los existentes."
  - categoria: rutinas
    title: "Crear una rutina"
    summary: "Una rutina es una lista de ejercicios con sus series y repeticiones."
    images: [/capturas/appfitness/rutinas.webp, /capturas/appfitness/rutina-buscar.webp]
    steps:
      - "En «Rutinas», pulsa el botón «+»."
      - "Escribe el nombre de la rutina."
      - "Busca un ejercicio (te salen primero los que mejor coinciden) y elígelo."
      - "Indica las series y las repeticiones mínima y máxima, y pulsa «Agregar»."
      - "Pulsa «Guardar»."
    note: "No puede haber dos rutinas con el mismo nombre, y «Descanso» está reservado."
  - categoria: rutinas
    title: "Editar una rutina"
    summary: "Añadir, cambiar o reordenar ejercicios se guarda al instante."
    images: [/capturas/appfitness/rutina-editar.webp, /capturas/appfitness/rutina-editar-ejercicios.webp]
    steps:
      - "Toca una rutina para abrirla."
      - "Añade ejercicios con «Agregar» o toca uno para modificarlo: se guarda al momento."
      - "Con las flechas subes y bajas un ejercicio, también al instante."
      - "Quitar un ejercicio con la «✕» pide confirmar: aparecen «Guardar» y «Cancelar», y puedes «Deshacer»."
  - categoria: rutinas
    title: "Alternativas a un ejercicio"
    summary: "Para cuando la máquina está ocupada, tienes hasta tres sustitutos."
    images: [/capturas/appfitness/rutina-editar-ejercicios.webp]
    steps:
      - "Abre el ejercicio dentro de la rutina."
      - "En «Alternativas (si no puedes hacerlo)», busca y añade hasta 3."
      - "Al registrar, las alternativas salen en la lista como «Alternativa a …» con las mismas series y repeticiones."
  - categoria: rutinas
    title: "Preparar tu semana"
    summary: "Asigna una rutina a cada día para que «Hoy toca» se rellene solo."
    images: [/capturas/appfitness/rutinas.webp, /capturas/appfitness/plan-dia.webp]
    steps:
      - "En «Rutinas», mira el bloque «Plan semanal» con los siete días."
      - "Pulsa un día y elige «Descanso» o una de tus rutinas."
      - "El círculo se rellena con la inicial de la rutina, y «Hoy toca» y el widget se actualizan."
      - "«Exportar plan semanal» guarda el plan en un archivo de texto en Descargas."
  - categoria: rutinas
    title: "Guardar y cambiar de programa"
    summary: "Un programa es una semana completa guardada, para alternar entre varias."
    images: [/capturas/appfitness/rutinas.webp]
    steps:
      - "Con tu semana montada, pulsa «Guardar plan semanal como programa» y ponle nombre."
      - "Cada programa se muestra con sus rutinas y sus siete días."
      - "«Activar» copia ese programa a tu plan semanal. Si es el que está en uso, pone «Programa activo»."
      - "Tocando el programa puedes cambiar sus días o «Renombrar»; la «✕» lo elimina sin borrar tus rutinas."
    note: "Activar un programa sustituye el plan actual. Si quieres conservarlo, guárdalo antes como programa."
  - categoria: progreso
    title: "Resumen mensual y series por músculo"
    summary: "Compara tu mes con el anterior y mira qué músculos trabajas."
    images: [/capturas/appfitness/progreso.webp]
    steps:
      - "La tarjeta del mes muestra sesiones, series y volumen, con la variación respecto al mismo tramo del mes pasado."
      - "«Series por músculo» reparte tus series de la semana. Las flechas cambian de semana."
  - categoria: progreso
    title: "Gráficas de peso y progresión"
    summary: "Mira cómo evolucionan tu peso corporal y cada ejercicio."
    images: [/capturas/appfitness/progreso-graficas.webp]
    steps:
      - "Elige el periodo con los chips «30 días», «3 meses», «1 año» o «Todo»."
      - "«Peso corporal» sale de lo que guardas en tu perfil: cada vez que lo actualizas se añade un punto."
      - "En «Progresión por ejercicio» eliges el ejercicio y ves el mayor peso de cada día."
  - categoria: progreso
    title: "Récords y buscador"
    summary: "El mayor peso de cada ejercicio, agrupado por músculo."
    images: [/capturas/appfitness/progreso-records.webp]
    steps:
      - "La lista agrupa tus récords por músculo, con el peso, las repeticiones y el 1RM estimado."
      - "Los récords de menos de 30 días llevan la insignia «Nuevo»."
      - "El buscador filtra por nombre."
  - categoria: comunidad
    title: "Entrar en Comunidad"
    summary: "Necesitas una cuenta de Google; el resto de la app funciona sin ella."
    images: [/capturas/appfitness/comunidad.png]
    steps:
      - "Abre la pestaña «Comunidad» y pulsa «Iniciar sesión con Google»."
      - "Verás las publicaciones de otras personas. Filtra por tipo, nivel y objetivo, u ordena por recientes o populares."
      - "«Mías» muestra lo que has publicado tú."
  - categoria: comunidad
    title: "Publicar una rutina o una semana"
    summary: "Comparte un día o un programa entero."
    steps:
      - "Pulsa el «+» de Comunidad."
      - "Elige «Una rutina» o «Una semana» y qué quieres compartir."
      - "Pon un título, una descripción, el nivel y el objetivo."
      - "Pulsa «Publicar». Para retirarla, abre tu publicación y pulsa «Retirar publicación»."
    note: "Solo se comparten los ejercicios, series y repeticiones. Nunca tus pesos, tus fechas, tu perfil ni tu correo."
  - categoria: comunidad
    title: "Añadir una rutina de otra persona a las tuyas"
    summary: "Se copia a tu móvil y pasa a funcionar sin conexión."
    images: [/capturas/appfitness/comunidad.png]
    steps:
      - "Abre una publicación y pulsa «Añadir a mis rutinas»."
      - "Si ya tienes una con el mismo nombre, la app te avisa de que la nueva se llamará «Nombre (2)». La tuya no se toca."
      - "Aparece en «Rutinas» como una más, y puedes editarla y asignarla a tu semana."
      - "También puedes dar «Me gusta» o «Reportar» una publicación."
  - categoria: perfil
    title: "Tu perfil, foto y banner"
    summary: "Personaliza tu perfil con foto, banner, Instagram y cumpleaños."
    images: [/capturas/appfitness/perfil.webp, /capturas/appfitness/perfil-editar.webp]
    steps:
      - "En «Perfil», pulsa el lápiz para editar."
      - "Toca la foto para elegir de la galería o usar la de tu cuenta de Google, y encuádrala en la pantalla de recorte."
      - "Toca el banner para añadir una imagen de fondo."
      - "Para Instagram, copia el enlace de tu perfil desde la app y pégalo en el campo: se queda como @usuario."
      - "Pulsa «Guardar». Foto y banner se aplican al instante."
  - categoria: perfil
    title: "Ajustes: tema y cuenta"
    summary: "Elige el aspecto de la app y gestiona tu sesión."
    images: [/capturas/appfitness/ajustes.webp]
    steps:
      - "En «Perfil», pulsa el engranaje."
      - "En «Apariencia», elige «Seguir al sistema», «Claro» u «Oscuro». También cambian los widgets."
      - "En «Cuenta», inicia o cierra sesión con Google. Es opcional."
  - categoria: perfil
    title: "Copia completa y cambio de móvil"
    summary: "Guarda todo en un archivo y restáuralo en otro móvil."
    images: [/capturas/appfitness/ajustes-datos.webp]
    steps:
      - "En «Ajustes», baja hasta «Tus datos»."
      - "«Exportar copia completa» crea un archivo ZIP con tu base de datos y tus imágenes, donde tú elijas."
      - "En el móvil nuevo, instala la app y pulsa «Restaurar copia». Confirma, y la app se reinicia con tus datos."
      - "«Exportar datos registrados», en «Perfil», guarda solo tus registros en un archivo legible."
    note: "Restaurar sustituye los datos actuales. Antes, la app guarda una copia de seguridad de lo que había."
  - categoria: widgets
    title: "Añadir un widget a la pantalla de inicio"
    summary: "Seis widgets para consultar y apuntar sin abrir la app."
    steps:
      - "Mantén pulsado un hueco de la pantalla de inicio y elige «Widgets»."
      - "Busca la app y arrastra el que quieras."
      - "Hoy toca (rutina y ejercicios), Cardio y abdominales (registra con un toque), Descanso (cuenta atrás), Récord, Semana y Resumen semanal."
    note: "Siguen el tema claro u oscuro que elijas en Ajustes."
  - categoria: widgets
    title: "Temporizador de descanso"
    summary: "Cuenta atrás entre series, también desde un widget."
    steps:
      - "En la tarjeta o el widget «Descanso», elige 1:00, 1:30, 2:00 o 3:00."
      - "Puedes pausar, sumar o restar 15 segundos, o cancelar."
      - "Al terminar suena una notificación: «¡Descanso terminado!»."
    note: "Para recibir el aviso, permite las notificaciones de la app."
  - categoria: widgets
    title: "Widget Récord"
    summary: "Elige el ejercicio del que quieres ver tu marca."
    steps:
      - "Al colocarlo, elige un ejercicio o «El más reciente»."
      - "Muestra tu PR y, si no tienes, tu mejor serie. Al agrandarlo añade cuándo lo lograste y el 1RM estimado."
      - "Para cambiarlo, mantenlo pulsado y elige «Reconfigurar»."
      - "Tocarlo abre «Progreso»."
  - categoria: actualizar
    title: "Actualizar la app desde dentro"
    summary: "La app avisa de las versiones nuevas y se instala sola con tu confirmación."
    images: [/capturas/appfitness/actualizar-banner.webp, /capturas/appfitness/actualizar-cartel.webp]
    steps:
      - "Cuando hay versión nueva, aparece un banner en la app, un cartel en Ajustes y, si lo tienes activado, una notificación."
      - "Pulsa «Actualizar» (o «Buscar actualización» en Ajustes)."
      - "La primera vez, Android abre «Instalar apps desconocidas»: activa «Permitir desde esta fuente» y vuelve a pulsar."
      - "La app descarga el archivo, comprueba que no está alterado y que lo firma el mismo autor, y abre el instalador de Android."
      - "Confirma la instalación. La app se reinicia con la versión nueva y tus datos intactos."
    note: "Sin conexión, la descarga continúa donde se quedó. Si algo no cuadra, no se instala nada."
  - categoria: actualizar
    title: "Primera instalación"
    summary: "Cómo instalar el APK por primera vez."
    steps:
      - "Descarga el APK desde el botón de esta página, desde el móvil."
      - "Ábrelo y permite a tu navegador instalar apps si Android lo pide."
      - "Si Play Protect avisa de que no es de Play Store, elige «Analizar app» o «Instalar de todos modos»."
      - "A partir de aquí, las versiones nuevas se instalan desde la propia app."
---

AppFitness nació para apuntar el entrenamiento rápido, entre series y sin distracciones. Está escrita en Kotlin con Jetpack Compose y Material 3, con modo claro u oscuro.
