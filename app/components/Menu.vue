<template>
  <header class="menu">
    <nav>
      <NuxtLink to="/" class="link">Início</NuxtLink>
      <!-- <NuxtLink to="about" class="link">Sobre</NuxtLink> -->
    </nav>
  </header>
</template>

<style>
.menu {
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: #1e293b;
  padding: 15px;
}

.link {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  padding: 20px;
}

.link:hover {
  color: #38bdf8;
}
</style>
