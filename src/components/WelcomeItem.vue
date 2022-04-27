<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <p class="min-about">
        <slot name="paragraph"></slot>
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
}

h3 {
  padding: 30px 0;
  font-family: new-spirit, sans-serif;
  color: #0a5029;
  font-size: 50px;
  line-height: 76px;
  font-weight: 500;
  margin-bottom: 0;
  padding-bottom: 0;
}
.min-about {
  font-family: "Roboto Mono";
  font-size: 20px;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    display: block;
  }

  .item:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
