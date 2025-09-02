import PagePreviewLayout from '../components/PagePreviewLayout';

const UnionDarkRP = () => {
  return (
    <PagePreviewLayout
      title='Union DarkRP'
      description='Page de prévisualisation du site internet du serveur Union DarkRP.'
      headContent={
        <>
          <meta charSet="utf-8" />
          <meta content="IE=Edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width,initial-scale=1,viewport-fit=cover" name="viewport" />
          <meta content="notranslate" name="google" />
          <meta content="contact@uniondarkrp.ovh/" name="email" />
          <meta content="union,union-darkrp,gaming,gmod,garrys mod,français,forum,server" name="keywords" />
          <meta content="keketiger (https://steamcommunity.com/id/keketiger/)" name="author" />
          <meta content="#2d3238" name="theme-color" />
          <meta content="Union Dark RP" name="application-name" />
          <meta content="Union Dark RP" name="apple-mobile-web-app-title" />
          <meta content="fr_FR" property="og:locale" />
          <meta content="Union Dark RP" property="og:site_name" />
          <meta content="website" property="og:type" />
          <meta content="Union Dark RP" property="og:title" />
          <meta content="" property="og:description" />
          <meta content="https://uniondarkrp.ovh/" property="og:url" />
          <meta content="summary_large_image" property="twitter:card" />
          <meta content="Union Dark RP" property="twitter:title" />
          <meta content="" property="twitter:description" />
          <link rel='icon' href='../projets/union-darkrp/favicon.ico' />
          <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
          <script src="https://kit.fontawesome.com/a076d05399.js"></script>
          <link href="../projets/union-darkrp/style.css" rel="stylesheet" />
        </>
      }
    >
      <nav className="fixed-top navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">Union Dark RP</a>
          <button
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-dark navbar-toggler"
            data-target="#navbarNavDropdown"
            data-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="ml-auto navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="./forum/">Forum</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://discord.gg/QUeQFwd" target="_blank">Discord</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2162992855" target="_blank">Workshop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/boutique">Boutique</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main role="main">
        <section className="text-center header">
          <div className="container">
            <img src="../projets/union-darkrp/logo.webp" />
            <h1 className="text-white jumbotron-heading">Union Dark RP</h1>
            <p className="text-white lead">Communauté Garry's Mod</p>
            <p>
              <a className="btn my-2 striped-shadow" href="steam://connect/176.9.91.60:27015" target="_blank"><span>Nous rejoindre</span></a>
            </p>
          </div>
        </section>
        <section className="features-list">
          <div className="container">
            <div className="row">
              <div className="text-center col-md-12">
                <div className="center-align"><h2 className="heading">Pourquoi choisir Union Dark RP ?</h2></div>
              </div>
            </div>
            <div className="text-center icon-box-grid">
              <div className="col-md-4 col-xs-12 no-padding">
                <div className="icon-box">
                  <div className="icon-main"><i className="fas fa-chart-line"></i></div>
                  <div className="content-box">
                    <h5>Performances</h5>
                    <p>Profiter des meilleures performances possibles avec notre CPU AMD EPYC 4Vcores et un réseau faible latence.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 no-padding">
                <div className="icon-box">
                  <div className="icon-main"><i className="fas fa-gamepad"></i></div>
                  <div className="content-box">
                    <h5>Contenue Exclusif</h5>
                    <p>Découvrez notre contenu exclusif régulièrement mis à jour, conçu pour faciliter le gameplay..</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-12 no-padding">
                <div className="icon-box">
                  <div className="icon-main"><i className="fas fa-dice-d6"></i></div>
                  <div className="content-box">
                    <h5>Semi-Roleplay</h5>
                    <p>100 slots disponible, économie réelle, serveur complètement en français.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="gallery">
          <div className="container">
            <div className="row">
              <div className="text-center col-md-12">
                <div className="center-align"><h2 className="heading text-white">Aperçu de notre serveur !</h2></div>
              </div>
            </div>
            <div className="carousel slide" data-interval="5000" data-ride="carousel" id="carouselGallery">
              <ol className="carousel-indicators">
                <li data-slide-to="1.jpg" data-target="#carouselGallery" className="active"></li>
                <li data-slide-to="2.jpg" data-target="#carouselGallery"></li>
                <li data-slide-to="3.jpg" data-target="#carouselGallery"></li>
                <li data-slide-to="4.jpg" data-target="#carouselGallery"></li>
                <li data-slide-to="5.jpg" data-target="#carouselGallery"></li>
                <li data-slide-to="6.jpg" data-target="#carouselGallery"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active"><img src="../projets/union-darkrp/carousel/1.jpg" alt="1.jpg" className="d-block w-100" /></div>
                <div className="carousel-item"><img src="../projets/union-darkrp/carousel/2.jpg" alt="2.jpg" className="d-block w-100" /></div>
                <div className="carousel-item"><img src="../projets/union-darkrp/carousel/3.jpg" alt="3.jpg" className="d-block w-100" /></div>
                <div className="carousel-item"><img src="../projets/union-darkrp/carousel/4.jpg" alt="4.jpg" className="d-block w-100" /></div>
                <div className="carousel-item"><img src="../projets/union-darkrp/carousel/5.jpg" alt="5.jpg" className="d-block w-100" /></div>
                <div className="carousel-item"><img src="../projets/union-darkrp/carousel/6.jpg" alt="6.jpg" className="d-block w-100" /></div>
              </div>
              <a className="carousel-control-prev" href="#carouselGallery" data-slide="prev" role="button"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="sr-only">Précédent</span></a>
              <a className="carousel-control-next" href="#carouselGallery" data-slide="next" role="button"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="sr-only">Suivant</span></a>
            </div>
          </div>
        </section>
        <section className="discord">
          <div className="container">
            <div className="row">
              <div className="text-center col-md-12">
                <div className="center-align"><h2 className="heading">Rejoignez-nous sur Discord</h2></div>
              </div>
            </div>
            <iframe
              allowTransparency
              frameBorder="0"
              height="500"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              src="https://discordapp.com/widget?id=739869004134482195&theme=dark"
              width="100%"
            ></iframe>
          </div>
        </section>
      </main>

      <footer className="pt-4 pt-md-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p className="text-primary">
                <small>Découvrez Union Dark RP et sont contenu exclusif.</small>
              </p>
            </div>
            <div className="col-md-4">
              <ul className="text-white">
                <li>
                  <a href="/forum/">Forum</a>
                </li>
                <li>
                  <a href="https://discord.gg/QUeQFwd" target="_blank">Discord</a>
                </li>
                <li>
                  <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2162992855" target="_blank">Workshop</a>
                </li>
                <li>
                  <a href="#">Boutique</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="site-footer-border">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  <a href="#">© 2020 Union Dark RP</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <script crossOrigin="anonymous" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script crossOrigin="anonymous" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
      <script crossOrigin="anonymous" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </PagePreviewLayout>
  );
}

export default UnionDarkRP;