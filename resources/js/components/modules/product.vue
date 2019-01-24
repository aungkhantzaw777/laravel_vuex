<template>
    <section class="blog bgwhite p-t-94 p-b-65">
		<div class="container">
			<div class="sec-title p-b-52">
				<h3 class="m-text5 t-center">
					Our Blog
				</h3>
			</div>

			<div class="row">
				

				

				<div class="col-sm-10 col-md-4 p-b-30 m-l-r-auto" :key="product" v-for="product in products">
					<!-- Block3 -->
					<div class="block3">
						<a href="blog-detail.html" class="block3-img dis-block hov-img-zoom">
							<img src="images/blog-03.jpg" alt="IMG-BLOG">
						</a>

						<div class="block3-txt p-t-14">
							<h4 class="p-b-7">
								<a href="blog-detail.html" class="m-text11">
									{{product.name}}
								</a>
							</h4>

							<span class="s-text6">By</span> <span class="s-text7">{{ product.brand }}</span>
							

							<p class="s-text8 p-t-16">
								{{product.price}}
							</p>
						</div>
					</div>
				</div>


			</div>
		</div>
	</section>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    name:'product',
    computed:{
        ...mapGetters([
        'products'
        ])
    }
}
</script>

<style scoped>

</style>


