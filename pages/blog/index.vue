<script setup>
useHead({
  title: 'Blog',
})
</script>

<template>
  <article class="blog active" data-page="blog">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.blog') }}
      </h2>
    </header>

    <section class="blog-posts">
      <ul class="blog-posts-list">
        <li class="blog-post-item">
          <a href="https://bit.ly/ADLink-Docs">

            <figure class="blog-banner-box">
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1685698726479/4120633e-1475-4696-af64-31a9296696dd.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="ADLink Documentation" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Docs</p>

                <span class="dot" />

                <time datetime="2023-06-2">June 2, 2023</time>
              </div>

              <h3 class="h3 blog-item-title">ADLink Documentation</h3>

              <p class="blog-text">
                A perfect custom alternative for linktree, bio and other shortner platform.
              </p>

            </div>

          </a>
        </li>

        <li class="blog-post-item">
          <a href="https://blog.agcrisbp.my.id/posts/cara-install-phpmyadmin-di-android-menggunakan-termux">

            <figure class="blog-banner-box">
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1685699212595/40c994c9-0d1a-4eba-a82b-76c5da81683f.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="Cara Install PHPMyAdmin Di Android Menggunakan Termux" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Guide</p>

                <span class="dot" />

                <time datetime="2023-05-21">May 21, 2023</time>
              </div>

              <h3 class="h3 blog-item-title">Cara Install PHPMyAdmin Di Android Menggunakan Termux</h3>

              <p class="blog-text">
                PHPMyAdmin adalah alat yang digunakan untuk mengelola database yang dapat diakses melalui web.


              </p>

            </div>

          </a>
        </li>

        <li class="blog-post-item">
          <a href="https://blog.agcrisbp.my.id/posts/cara-mengirim-foto-ukuran-asli-di-whatsapp">

            <figure class="blog-banner-box">
              <img src="https://raw.githubusercontent.com/agcrisbp/blog/main/public/wa.png" alt="Cara Mengirim Foto Ukuran Asli Di WhatsApp" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Guide</p>

                <span class="dot" />

                <time datetime="2023-05-10">May 10, 2023</time>
              </div>

              <h3 class="h3 blog-item-title">Cara Mengirim Foto Ukuran Asli Di WhatsApp</h3>

              <p class="blog-text">
                WhatsApp secara otomatis mengompres file gambar yang dikirim, sehingga ukurannya lebih kecil, memp...
              </p>

            </div>

          </a>
        </li>

        <li class="blog-post-item">
          <a href="https://blog.agcrisbp.my.id/posts/how-to-calculated-age-using-javascript">

            <figure class="blog-banner-box">
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1685699222636/2e36749d-ac8c-42a1-9d01-151492cb1ab2.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="How To Calculated Age For Date of Birth Using JavaScript" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Guide</p>

                <span class="dot" />

                <time datetime="2023-04-14">Apr 14, 2023</time>
              </div>

              <h3 class="h3 blog-item-title">How To Calculated Age For Date of Birth Using JavaScript</h3>

              <p class="blog-text">
                You can use this script to calculate your ages or hours of support.
              </p>

            </div>

          </a>
        </li>

        <li class="blog-post-item">
          <a href="https://blog.agcrisbp.my.id/posts/php-redirect-using-get-parameter">

            <figure class="blog-banner-box">
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1685699244737/468273f9-5c58-4b48-b962-913773a9c5b3.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" alt="PHP Redirect Using $GET Parameter In HTML" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Guide</p>

                <span class="dot" />

                <time datetime="2023-04-3">Apr 3, 2023</time>
              </div>

              <h3 class="h3 blog-item-title">PHP Redirect Using $GET Parameter In HTML</h3>

              <p class="blog-text">
                A complicated tutorial.
              </p>

            </div>

          </a>
        </li>

        <li class="blog-post-item">
          <a href="https://blog.agcrisbp.my.id/posts/cara-mengeluarkan-akun-google">

            <figure class="blog-banner-box">
              <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1685699236149/9bceb6ff-ee46-4f77-b2b6-7e54c36e41e1.jpeg?auto=compress,format&format=webp" alt="Cara Mengeluarkan Akun Google Di Perangkat Lain" loading="lazy">
            </figure>

            <div class="blog-content">

              <div class="blog-meta">
                <p class="blog-category">Guide</p>

                <span class="dot" />

                <time datetime="2013-06-13">June 13, 2013</time>
              </div>

              <h3 class="h3 blog-item-title">Cara Mengeluarkan Akun Google Di Perangkat Lain</h3>

              <p class="blog-text">
                Cara ini dapat digunakan untuk mengatasi masalah aktivitas Akun Google yang mencurigakan.
              </p>

            </div>

          </a>
        </li>
      </ul>
    </section>
  </article>
</template>
