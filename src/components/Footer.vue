<template>
  <div>
    <b-modal id="modal-1" title="I'd be happy to take your call" hide-footer>
      <p>Mobilephone: 0275553573</p>
    </b-modal>
    <b-navbar class = "my-navbar" type="dark">
      <b-navbar-nav>
        <b-nav-item class="my-name">Website made by Juan Fernando Parra, All rights reserved.</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="https://github.com/jparrax" target="_blank"><img src="../assets/footer/1.png" width="50px"></b-nav-item>
        <b-nav-item href="https://www.linkedin.com/in/juan-fernando-parra-cadavid-70196654/" target="_blank"><img src="../assets/footer/2.png" width="50px"></b-nav-item>
        <b-nav-item v-b-modal.modal-1><img src="../assets/footer/3.png" width="50px"></b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>