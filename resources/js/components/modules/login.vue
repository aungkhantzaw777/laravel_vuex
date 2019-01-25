<template>
    <div>
        <form>
            <div class="form-group">
                <label for="name">name</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group">
                <label for="password">password</label>
                <input type="text" class="form-control">
            </div>
            <input type="submit" value="send" name="send">
        </form>
    </div>
</template>

<script>
export default {
    name:'login'
}
</script>

