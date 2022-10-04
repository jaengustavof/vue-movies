<template>
    <div class="contact-us">
        <div class="contact-us-container">
            <div class="form-container">
                <h3 class="form-container_title">How to reach us</h3>
                <p class="form-container_subtitle">Lorem ipsum dolor sit amet consectetur.</p>
                <form action="">
                    <div class="form-row-50">
                        <div class="input-content">
                            <label for="fname">First Name *</label>
                            <input type="text" id="fname" name="fname" required>
                        </div>
                        
                        <div class="input-content">
                            <label for="lname">Last Name *</label>
                            <input type="text" id="lname" name="lname" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <label for="email">Email *</label>
                        <input type="email" id="email" name="email">
                    </div>
                    <div class="form-row">
                        <label for="phone">Telephone *</label>
                        <input type="tel"  id="phone" name="phone">
                    </div>
                    <div class="form-row">
                        <label for="phone">Message *</label>
                        <textarea name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <p> * required fields</p>
                    <div class="form-row-check">
                        <input type="checkbox">
                        <p> I agree on the <a href="#">Terms & conditions</a></p>
                    </div>
                    <div class="form-row-button">
                        <input type="button" value="Submit">
                    </div>
                </form>
            </div>
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48588.133010545425!2d-3.7152472!3d40.4363503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422f35d4f0c269%3A0x754405946e8ca584!2sAmadeus%20IT%20Group!5e0!3m2!1sen!2ses!4v1664820746485!5m2!1sen!2ses" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Contact-Us'
    }
</script>
    
<style scoped lang="scss">
    @import './contact_us.scss';
</style>