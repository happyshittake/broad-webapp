<template>
  <div class="brand-header">
    <div class="brand-container">
      <h1 class="brand-name">Broad</h1>
    </div>
  </div>
  <div class="main-content">
    <div class="nav-group">
      <div class="nav-item">
        <a v-link="{path: '/baru'}" class="button-nav">
          Laporan
        </a>
      </div>
      <div class="nav-item">
        <a v-link="{path: '/data'}" class="button-nav">
          Data
        </a>
      </div>
    </div>
  </div>
  <div class="footer">
    <a v-link="{path: '/logout'}" class="button-nav">
      Keluar
    </a>
  </div>
</template>

<script>
  export default {
    name: 'MainMenu'
  }
</script>

<style scoped>
  .brand-header {
    background: #36A9DB;
  }

  .brand-container {
    padding: 1.3em;
    text-align: center;
    max-width: 960px;
    margin: 0 auto;
  }

  .brand-container > .brand-name {
    font-size: 3rem;
    font-weight: bold;
  }

  .main-content {
    flex: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .main-content > .nav-group {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .nav-group > .nav-item {
    flex: 0 0 50%;
    display: inline-block;
  }

  .button-nav {
    padding: .8em;
    font-size: 2.5rem;
    font-weight: bold;
    text-decoration: none;
    background: #000;
    border-radius: 10px;
  }

  .button-nav:hover {
    text-decoration: none;
  }

  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .footer > .button-nav {
    margin-bottom: 1.2em;
  }
</style>
