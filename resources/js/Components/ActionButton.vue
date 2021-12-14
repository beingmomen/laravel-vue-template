<template>
  <div class="">
    <button
      type="button"
      class="action btn button py-3 font-weight-bold"
      :class="isDark ? `${title} btn-dark-theme` : `${title} btn-light-theme`"
      :id="`action-${title}-${itemId}`"
      :style="`border-color: ${color}`"
      :data-toggle="isForModal ? 'modal' : ''"
      :data-target="isForModal ? `#${modalId}` : ''"
      :disabled="!isEnabled"
    >
      <!-- @click="buttonClicked" -->
      <i
        v-if="title == 'reinstall'"
        :style="{ color: color }"
        :class="isInstalledBefore ? type : 'fa-download'"
        class="fas d-block mb-3"
      ></i>
      <i
        v-else
        :style="{ color: color }"
        :class="type"
        class="fas d-block mb-3"
      ></i>
      <p
        class="mb-0 text-capitalize"
        v-if="title != 'reinstall'"
        :style="{ color: textColor }"
      >
        {{ $t(`dedicated.buttons.${title}`) }}
      </p>
      <p class="mb-0 text-capitalize" v-else :style="{ color: textColor }">
        {{
          isInstalledBefore
            ? $t("dedicated.buttons.reinstall")
            : $t("dedicated.buttons.install")
        }}
      </p>
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    // console.warn("action Vutton Title: ", this.title);
    // if (this.title != "reinstall") {
    //   $(`#action-${this.title}-${this.itemId}`).removeAttr("data-toggle");
    //   $(`#action-${this.title}-${this.itemId}`).removeAttr("data-target");
    // }
  },
  props: [
    "title",
    "color",
    "type",
    "textColor",
    "itemId",
    "isForModal",
    "modalId",
    "isEnabled",
    "isInstalledBefore",
  ],
  methods: {},
  computed: {
    ...mapState("global", ["isDark"]),
  },
};
</script>

<style lang="scss" scoped>
.button {
  min-height: 80px;
  width: 125px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid;
  //   background-color: #fff;
  transition: background-color 0.5s;
  cursor: pointer;
}

.button i {
  font-size: 2rem;
  transition: color 0.5s;
}

.button p {
  transition: color 0.5s;
}

.button:hover {
  background-color: #ff4300;
}

.button:hover i,
.button:hover p {
  color: #fff !important;
}

.stop:hover {
  background-color: #ff9700;
}

.stop:hover i,
.stop:hover p {
  color: #fff !important;
}
.btn-dark-theme {
  background-color: #0c1427;
}
.btn-light-theme {
  background-color: #fff;
}
</style>>


