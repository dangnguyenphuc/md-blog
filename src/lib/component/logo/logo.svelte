<script>
	import { onMount } from 'svelte';
	import { paint } from './gradient';

    /**
	 * @type {HTMLCanvasElement}
	 */
    let canvas;

	onMount(() => {
		const context = canvas.getContext('2d');

        if(context)
		{
            let frame = requestAnimationFrame(function loop(t) {
			frame = requestAnimationFrame(loop);
			paint(context, t);
		    });

            return () => {
			    cancelAnimationFrame(frame);
		    };
        }
		else{
            return;
        }
	});
</script>

<canvas
    bind:this={canvas}
/>

<style>
	canvas {
		width: 100%;
		height: 100%;
		background-color: #666;
		mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
		mask-size: 30vmin;
		-webkit-mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
		-webkit-mask-size: 30vmin;
	}
</style>
