<script>
    import { base } from "$app/paths";
</script>


<div class="container">
    <ul>
        <li><a href="{base}/">Home</a></li>
        <li><a href="{base}/projects">My projects</a></li>
    </ul>
    <slot></slot>
</div>

<style>
    ul {
        display: flex;
        justify-content: space-around;
        list-style: none;
    }
    ul li {
        margin: 0 10px;
    }

</style>
