<script setup lang="ts"></script>

<template>
<header>
    <nav>
    <div class="nav-content">
      <div class="logo">
        <h1>Task Flow</h1>
      </div>
    </div>
  </nav>
</header>
<FormView />
</template>

<script setup lang="ts">
import FormView from "./view/FormView.vue";
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Ubuntu", sans-serif;
  color:aliceblue;
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  transition: all 0.4s ease;
  background-color: black;
  z-index: 1;
}
nav.sticky {
  padding: 15px 20px;
  background: #fecd03;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
nav .nav-content {
  height: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav .logo a {
  font-weight: 500;
  font-size: 35px;
  color: #353842;
}
nav.sticky .logo a {
  color: #fff;
}

.nav-content .nav-links {
  display: flex;
}

.nav-content .nav-links li {
  list-style: none;
  margin: 0 8px;
}

.nav-links li a {
  text-decoration: none;
  color: #0e2431;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 4px;
  transition: all 0.3 ease;
}

.nav-links li a:hover {
  color: #fecd03;
}

.nav.sticky .nav-links li a {
  color: #fff;
  transition: all 0.4 ease;
}

.nav.sticky .nav-links li a:hover {
  color: #0e2431;
}

</style>
