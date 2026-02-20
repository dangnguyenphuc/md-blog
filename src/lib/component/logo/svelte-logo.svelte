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
		background-color: #666;
		mask: url(logo/svelte-logo-mask.svg) 50% 50% no-repeat;
	}
</style>
