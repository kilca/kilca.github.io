<template>
  <div class="about">
        <h1>Privacy Policy</h1>
    <p>The SERVICES by me (kilca) are provided at no cost and are intended for use as they are. This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Information if anyone decided to use Our Services. If you choose to use Our Services, then you agree to the collection and use of information in relation to this policy. The Information that we collect is used for providing and improving the Services. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
    
    <h2>Our Services</h2>
    <p>This policy applies to <b>Our Website</b> and to all of <b>Our Apps/Websites/Mobile Apps</b> </p>

    <h2>Service Providers</h2>
    <p>We may employ third-party companies and individuals due to the following reasons:</p>
    <ul>
        <li>To facilitate Our Services;</li>
        <li>To provide Our Services on our behalf;</li>
        <li>To perform Service-related services; or</li>
        <li>To assist us in analyzing how Our Services are used.</li>
    </ul>
    <p>We want to inform users of Our Services that these third parties have access to your Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
    
    <h2>Information Collection and Use</h2>
    <p>For a better experience, while using Our Services, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this Privacy Policy. Our Apps do use third-party services that may collect information used to identify you. Link to the privacy policy of third party Service Providers used by Our Apps:</p>
    <ul>
        <li><a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank">AdMob</a></li>
        <li><a href="https://www.google.com/analytics/terms/" target="_blank">Google Analytics</a> </li>
        <li><a href="https://www.google.com/policies/privacy/" target="_blank">Google Play Services</a> </li>
    </ul>
    
    <h2>Log Data</h2>
    <p>We want to inform you that whenever you use one of Our Services, we collect data and information (through third party products) on your device called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing Our Service, the time and date of your use of the Service, and other statistics. We may share anonymous statistical information with third-party companies and individuals.</p>
    
    <h2>Cookies</h2>
    <p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory. We use Cookies on Our Website to provide the services and features offered, and to improve the user experience. Our Apps do not use these Cookies explicitly; however, they may use third party code and libraries that use Cookies to collect information and improve their services. You have the option to either accept or refuse these Cookies. If you choose to refuse the Cookies, you may not be able to use some portions of Our Services.</p>
    
    <h2>Security</h2>
    <p>We value your trust in providing us with your Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
    
    <h2>Links to Other Sites</h2>
    <p>Our Services may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the privacy policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
    
    <h2>Children’s Privacy</h2>
    <p>These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p>
    
    <h2>Changes to This Privacy Policy</h2>
    <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you
    </p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
  components: {
  },
})
export default class PrivacyPolicy extends Vue {

  
}
</script>

<style scoped lang="scss">

.about{
  background-color:rgb(244, 239, 239);
}

li{
  // we change the bullet point
  list-style-type: square;
  list-style-position: inside;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

p{
  color:black;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
