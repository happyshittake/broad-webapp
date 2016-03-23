<template>
  <div class="brand-header">
    <div class="brand-container">
      <img src="../assets/400x100black.png" class="img-responsive" alt="">
    </div>
  </div>
  <div class="main-content">
    <div class="nav-group">
      <div class="nav-item">
        <a v-link="{path: '/baru'}">
          <img src="../assets/150x150laporan.png" class="img-responsive img-btn" alt="">
          <span>Laporan</span>
        </a>
      </div>
      <div class="nav-item">
        <a v-link="{path: '/data'}">
          <img src="../assets/datainformasi.png" class="img-responsive img-btn" alt="">
          <span>Data Informasi</span>
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
    background: #3EAFDA;
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

  .brand-container > img {
    margin: 0 auto;
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

  .nav-item .img-btn {
    margin: 0 auto;
  }

  .nav-item span {
    font-size: 1.5rem;
  }

  .button-nav {
    padding: .8em;
    font-size: 2.5rem;
    font-weight: bold;
    text-decoration: none;
    background: #fff;
    border-radius: 10px;
    border: 2px solid #3EAFDA;
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
