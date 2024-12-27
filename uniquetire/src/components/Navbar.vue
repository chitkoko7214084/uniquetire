<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <h1 class="logo">Unique Tire And Repair</h1>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item" v-for="item in navItems" :key="item.id">
              <a class="nav-link" :href="item.href">{{ item.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header id="home" class="hero text-center d-flex flex-column" style="color : blueviolet">;">
      <div class="hero-content d-flex flex-column align-items-center justify-content-center">
        <h1>{{ $t('welcome') }}</h1>
      <p>{{ $t('trusted_partner') }}</p>

        <a href="#services" class="btn btn-warning btn-lg mt-3">{{ $t('explore_services') }}</a>
      </div>
    </header>

    <!-- About Us Section -->
    <section id="about" class="section-container bg-light">
  <div class="content-wrapper">
    <!-- Text Content -->
    <div class="text-container">
      <h2>{{ $t('about_us') }}</h2>
      <p>

        {{ $t('about_us_text') }}

      </p>
      <p>{{$t('about_us_text2')}} </p>
    </div>

    <!-- Image Carousel -->
    <div class="image-container">
      <div class="carousel">
        <div class="carousel-images">
          <img src="./img/1.jpg" alt="About Us" class="img-fluid rounded">
          <img src="./img/2.jpg" alt="Our Team" class="img-fluid rounded">
          <img src="./img/6.jpg" alt="Our Services" class="img-fluid rounded">
          <img src="./img/5.jpg" alt="About Us" class="img-fluid rounded">
          <img src="./img/3.jpg" alt="Our Team" class="img-fluid rounded">        
        
        </div>
      </div>
    </div>
  </div>
</section>

    <!-- Services Section -->
<section id="services" class="section-container">
  <div class="content-wrapper">
    <h2 class="text-center"> {{ $t('services') }}</h2>
    <div class="services-grid">
      <div class="service-card">
        <h4>{{ $t('tire_services')}}</h4>
        <p>{{ $t('tire_services_text') }}</p>
      </div>
      <div class="service-card">
        <h4>{{ $t('Brake Repair') }}</h4>
        <p>{{ $t('Brake Repair_text')}}</p>
      </div>
      <div class="service-card">
        <h4>{{ $t('oil_changes')}}</h4>
        <p>{{ $t('oil_changes_text') }}</p>
      </div>
      <div class="service-card">
        <h4>{{ $t('engine_diagnostic') }}</h4>
        <p>{{ $t('engine_diagnostic_text') }}</p>
      </div>
      <div class="service-card">
        <h4>{{ $t('battery_services')}}</h4>
        <p>{{ $t('battery_services_text') }}</p>
      </div>
      <div class="service-card">
        <h4>{{ $t('Air Conditioning Services')}}</h4>
        <p> {{ $t('Air Conditioning Services_text')}}</p>
      </div>
      <div class="service-card">
        <h4>{{ $t('Suspension Repairs')}}</h4>
        <p>{{ $t('Suspension Repairs_text') }}</p>
      </div>
    </div>
  </div>

    </section>

    <!-- Contact Us Section -->
<section id="contact" class="section-container bg-light">
  <div class="container">
    <h2 class="text-center">{{ $t('Contact Us')}}</h2>
    <p class="text-center mb-5">{{ $t('Contact Us_text') }}</p>
    <div class="row">
      <!-- Contact Info -->
      <div class="col-md-6">
        <h4 class="text-primary mb-4">{{ $t('Contact Information')}}</h4>
        <p>
          <strong>{{$t('Address')}}:</strong> 3510 S Calhoun St<br>Fort Wayne, Indiana 46806
        </p>
        <p><strong>{{$t('Phone')}}:</strong> <a href="tel:(260)456-5782">(260)456-5782</a></p>
        <p><strong>{{$t('Email')}}:</strong> <a href="mailto:uniquetirerepair@gmail.com">uniquetirerepair@gmail.com</a></p>
        <div class="map-container mt-4">
          <!-- Google Map -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.6971781612064!2d-85.13921758462265!3d41.0521585792948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8815ed3a1a62d87b%3A0x59e62d81d12c4539!2s3510%20S%20Calhoun%20St%2C%20Fort%20Wayne%2C%20IN%2046806%2C%20USA!5e0!3m2!1sen!2sin!4v1691257850606!5m2!1sen!2sin"
            width="100%"
            height="250"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      <!-- Contact Form -->
      <div class="col-md-6">
        <h4 class="text-primary mb-4">{{$t('Send Us a Message')}}</h4>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">{{$t('Name')}}</label>
            <input type="text" class="form-control" id="name" placeholder="Your Name">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">{{$t('Email')}}</label>
            <input type="email" class="form-control" id="email" placeholder="Your Email">
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">{{$t('Message')}}</label>
            <textarea class="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" class="btn btn-warning w-100">{{$t('Submit')}}</button>
        </form>
      </div>
    </div>
  </div>
</section>

  </div>
</template>

<script>
import "@/assets/css/styles.css";

export default {
  data() {
    return {
      navItems: [
        { id: 1, label: "Home", href: "#home" },
        { id: 2, label: "About Us", href: "#about" },
        { id: 3, label: "Services", href: "#services" },
        { id: 4, label: "Contact", href: "#contact" },
      ],
    };
  },
};
</script>