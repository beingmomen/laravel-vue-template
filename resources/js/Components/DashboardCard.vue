<template>
  <div
    class="dashboard-card"
    style="min-width: 250px; cursor: pointer"
    @click="$emit('card-clicked', action)"
  >
    <transition name="fade">
      <div class="card-body pb-0 px-0">
        <div class="d-flex justify-content-between align-items-baseline">
          <i
            class="fas fa-2x pl-4"
            :class="classIcon"
            :style="`color: ${color}`"
          ></i>
          <!-- <i class="fas fa-2x pl-4" :class="classIcon" :style="`color: ${color}`"></i> -->
          <h5
            class="mb-3 col-12 px-0 pl-3 text-uppercase"
            :style="`color: ${color}`"
          >
            {{ title }}
          </h5>
        </div>
        <div class="d-flex flex-column justify-content-start">
          <h3 class="mb-2 pl-4 font-weight-bold">{{ value }}</h3>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["title", "value", "classIcon", "color", "action"],
};
</script>

<style></style>
