<template>
  <div class="container-full-width">
    <div class="full-width-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.container-full-width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow-x: hidden; /* Ajout crucial pour éviter le scroll horizontal */
}

.full-width-content {
  /* Optionnel: Ajoute un padding horizontal si nécessaire */
  padding-left: var(--container-padding, 16px);
  padding-right: var(--container-padding, 16px);
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .full-width-content {
    --container-padding: 14px;
  }
}

@media (max-width: 480px) {
  .full-width-content {
    --container-padding: 10px;
  }
}
</style>