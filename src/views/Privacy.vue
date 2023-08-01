<template>
  <div class="flex justify-center">
    <div>
      <h1 class="text-7xl font-black uppercase mt-32">Privacy Policy</h1>
      <p class="opacity-80">Updated on {{ last_update }}</p>
    </div>
  </div>

  <div class="flex flex-col items-center">
    <div class="w-96 mx-10 my-20">
      <a-divider></a-divider>

      <ol class="mx-10 list-decimal">
        <li><a href="#a" class="text-accent">Information we collect</a></li>
        <ul class="list-disc ml-2">
          <li><a href="#a1" class="text-accent">Personal information</a></li>
          <li><a href="#a2" class="text-accent">Usage information</a></li>
          <li><a href="#a3" class="text-accent">Cookies and similar</a></li>
        </ul>

        <li>
          <a href="#b" class="text-accent">How we use your information</a>
        </li>
        <ul class="list-disc ml-2">
          <li>
            <a href="#b1" class="text-accent"
              >Providing and improving services</a
            >
          </li>
          <li><a href="#b2" class="text-accent">Communication</a></li>
          <li><a href="#b3" class="text-accent">Payment processing</a></li>
        </ul>

        <li>
          <a href="#c" class="text-accent">Data sharing and disclosure</a>
        </li>
        <ul class="list-disc ml-2">
          <li><a href="#c1" class="text-accent">Service providers</a></li>
          <li><a href="#c2" class="text-accent">Legal compliance</a></li>
          <li><a href="#c3" class="text-accent">Business transfers</a></li>
        </ul>

        <li><a href="#d" class="text-accent">Data security</a></li>
        <li><a href="#e" class="text-accent">Your rights and choices</a></li>
        <ul class="list-disc ml-2">
          <li><a href="#e1" class="text-accent">Access and update</a></li>
          <li><a href="#e2" class="text-accent">Data deletion</a></li>
        </ul>
        <li><a href="#f" class="text-accent">Changes to this policy</a></li>
        <li><a href="#g" class="text-accent">Contact</a></li>
      </ol>

      <a-divider></a-divider>
    </div>

    <div style="max-width: 50rem" class="mx-5">
      <p class="opacity-80">
        This Privacy Policy outlines how Sharify Inc. ("we," "us," or "our")
        collects, uses, discloses, and safeguards your information when you
        access or use our website, applications, products, and services
        (collectively referred to as "Services").
      </p>

      <div class="h-10"></div>
      <a-divider orientation="left" id="a">Information we collect</a-divider>

      <h1 class="font-bold text-2xl py-3" id="a1">Personal information</h1>
      <p class="mb-10">
        When you register for an account or use our Services, we may collect
        certain personal information, such as your contact details. We may also
        collect payment information when you purchase a subscription to our
        extended storage services.
      </p>

      <h1 class="font-bold text-2xl py-3" id="a2">Usage information</h1>
      <p class="mb-10">
        We automatically collect information about how you interact with our
        Services, including your IP address. This data helps us keep our
        Services secure.
      </p>

      <h1 class="font-bold text-2xl py-3" id="a3">
        Cookies and similar technologies
      </h1>
      <p class="mb-10">
        We only use cookies for the functionality of our service and do not use
        cookies for tracking. Cookies and similar technologies are employed
        solely to enhance the performance and usability of our Services. You can
        manage your cookie preferences through your browser settings.
      </p>

      <a-divider orientation="left" id="b"
        >How we use your information</a-divider
      >

      <h1 class="font-bold text-2xl py-3" id="b1">
        Providing and improving services
      </h1>
      <p class="mb-10">
        We use your personal and usage information to operate, maintain, and
        enhance our Services. This includes processing your files, providing
        customer support, and improving the features and functionality of our
        platform.
      </p>

      <h1 class="font-bold text-2xl py-3" id="b2">Communication</h1>
      <p class="mb-10">
        We may use your contact information to send you important updates and
        service announcements.
      </p>

      <h1 class="font-bold text-2xl py-3" id="b3">Payment processing</h1>
      <p class="mb-10">
        When you make a purchase, we use your payment information to process
        transactions and prevent fraudulent activities.
      </p>

      <a-divider orientation="left" id="c"
        >Data sharing and disclosure</a-divider
      >

      <h1 class="font-bold text-2xl py-3" id="c1">Service providers</h1>
      <p class="mb-10">
        We may share your information with trusted third-party service providers
        who assist us in delivering our Services. These providers are obligated
        to protect your information and are not allowed to use it for any other
        purpose.
      </p>

      <h1 class="font-bold text-2xl py-3" id="c2">Legal compliance</h1>
      <p class="mb-10">
        We may disclose your information if required to do so by law or in
        response to valid legal requests, such as subpoenas or court orders.
      </p>

      <h1 class="font-bold text-2xl py-3" id="c3">Business transfers</h1>
      <p class="mb-10">
        In the event of a merger, acquisition, or sale of all or part of our
        business, your information may be transferred as part of the
        transaction. We will notify you of any such change in ownership or
        control of your personal information.
      </p>

      <a-divider orientation="left" id="d">Data security</a-divider>

      <h1 class="font-bold text-2xl py-3" id="d1">Data security</h1>
      <p class="mb-10">
        We implement appropriate technical and organizational measures to
        protect your personal information from unauthorized access, disclosure,
        alteration, and destruction. However, no method of transmission over the
        internet or electronic storage is entirely secure, and we cannot
        guarantee absolute security.
      </p>

      <a-divider orientation="left" id="e">Your rights and choices</a-divider>

      <h1 class="font-bold text-2xl py-3" id="e1">Access and update</h1>
      <p class="mb-10">
        You can access and update your personal information through your account
        settings.
      </p>

      <h1 class="font-bold text-2xl py-3" id="e2">Data deletion</h1>
      <p class="mb-10">
        You may delete the data associated to your account in the account
        settings.
      </p>

      <a-divider orientation="left" id="f">Changes to this policy</a-divider>

      <h1 class="font-bold text-2xl py-3" id="f1">Changes to this policy</h1>
      <p class="mb-10">
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or for other operational, legal, or regulatory reasons.
        We will notify you of any material changes by posting the updated policy
        on our website or through other communication channels.
      </p>

      <a-divider orientation="left" id="g">Contact</a-divider>
      <h1 class="font-bold text-2xl py-3" id="j1">Contact</h1>
      <p class="mb-10">
        If you have any questions, concerns, or requests regarding this Privacy
        Policy or our data practices, please contact us at support@sharify.in.
      </p>

      <p class="opacity-80 text-sm">
        By using Sharify's Services, you consent to the collection, use, and
        sharing of your information as described in this Privacy Policy. If you
        do not agree with its terms, do not use our Services.
      </p>
    </div>
  </div>
</template>

<script setup>
const last_update = "July 30, 2023";
</script>
