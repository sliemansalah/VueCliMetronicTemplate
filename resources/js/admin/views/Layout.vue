<template>
  <div id="app">
      <div>
		<!-- begin:: Page -->

		<div class="m-grid m-grid--hor m-grid--root m-page">
			<app-header></app-header>
			<!-- END: Header -->

			<!-- begin::Body -->
			<div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">

				<!-- BEGIN: Left Aside -->
				<lside-menu></lside-menu>
				<!-- END: Left Aside -->
				<div class="m-grid__item m-grid__item--fluid m-wrapper">

					<div class="m-content">
						<router-view></router-view>
					</div>
				</div>
			</div>
			<!-- end:: Body -->

			<!-- begin::Footer -->
			<app-footer></app-footer>
			<!-- end::Footer -->
		</div>

		<!-- end:: Page -->

		<!-- begin::Scroll Top -->
		<div id="m_scroll_top" class="m-scroll-top">
			<i class="la la-arrow-up"></i>
		</div>
		<!-- end::Scroll Top -->

		<!-- begin::Quick Nav -->
		<quick-nav></quick-nav>
		<!-- begin::Quick Nav -->
  </div>
  </div>
</template>

<script>
import '../components'

export default {
   components: {
	
  }
}



</script>

<style>
</style>
