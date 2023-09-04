<script>
    import { marked } from 'marked';
    import cv from '$lib/cv.md?raw';

    let htmlContent = marked(cv);
</script>

<div>
    {@html htmlContent}
</div>
