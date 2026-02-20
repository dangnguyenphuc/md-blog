<script>
	import { main_logo_extension, main_logo_name } from "$lib/config";
    import { theme } from "$lib/stores/theme";

    $: currentLogoFile = main_logo_name + '-' + 
                        ($theme === 'dark' ? 'dark' : 'light') + '.'
                        + main_logo_extension;


</script>

<!-- <div class="container"> -->
<img src="{currentLogoFile}" alt="">
 
<!-- </div> -->

<style>
	
</style>
