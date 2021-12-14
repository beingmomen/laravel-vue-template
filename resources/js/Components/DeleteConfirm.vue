<template>
  <div
    class="modal fade del"
    :id="id"
    tabindex="-1"
    role="dialog"
    aria-labelledby="deleteModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" style="margin-top: 200px" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ $t("global.delete_item") }}</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div
            v-for="(error, index) in errors"
            :key="index"
            class="alert alert-danger"
          >
            {{ error }}
          </div>

          <p>
            {{ $t("global.are_you_sure_you_want_to_remove") }} ( {{ item }} )
            {{ $t("global.this_action_cant_be_undo") }}
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('submit', itemId)"
          >
            <i class="fas fa-trash mr-1"></i>
            {{ $t("dedicated.buttons.delete") }}
          </button>

          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            <i class="fas fa-times mr-1"></i>
            {{ $t("dedicated.buttons.cancel") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number],
    },
    itemId: {
      type: [String, Number],
    },
    item: {
      type: [String],
    },
    errors: {
      type: Array,
    },
  },
  data() {
    return {
      // errorsMsg: this.errors
    };
  },
  methods: {
    clearErrorMessage() {
      $("#" + this.id).on("hidden.bs.modal", () => {
        this.$emit("clearErrorMessage");
      });
    },
  },
  mounted() {
    this.clearErrorMessage();
  },
};
</script>

<style></style>
