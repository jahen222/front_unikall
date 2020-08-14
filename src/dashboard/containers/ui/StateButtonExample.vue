<template>
  <b-card class="mb-4" :title="$t('button.states')">
    <div class="mb-4">
      <p class="mb-1">{{ $t('button.states-text') }}</p>
      <state-button
        class="mb-3"
        id="successButton"
        variant="primary"
        :click="successButtonClick"
      >{{ $t('button.click-here') }}</state-button>
    </div>
    <div class="mb-4">
      <p class="mb-1">{{ $t('button.states-text-alternate') }}</p>
      <state-button
        class="mb-3"
        id="failButton"
        variant="secondary"
        :click="failButtonClick"
      >{{ $t('button.click-here') }}</state-button>
    </div>
  </b-card>
</template>

<script>
import StateButton from "../../components/Common/StateButton";
export default {
  components: {
    "state-button": StateButton
  },
  data() {
    return {
      selectedRadio: 0
    };
  },
  methods: {
    successButtonClick() {
      console.log("testing");
    },
    failButtonClick() {
      console.log("testing");
    }
  }
};
</script>
