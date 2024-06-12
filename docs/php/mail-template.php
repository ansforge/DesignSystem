<?php
  ob_start();
?>
<html>

<head>
  <title><?= $request['subject'] ?></title>
  <style type="text/css">
  @font-face {
    font-family: "futura-pt";
    src: url("https://use.typekit.net/af/9b05f3/000000000000000000013365/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"), url("https://use.typekit.net/af/9b05f3/000000000000000000013365/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"), url("https://use.typekit.net/af/9b05f3/000000000000000000013365/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
    font-display: auto;
    font-style: normal;
    font-weight: 400;
    font-stretch: normal;
  }

  @font-face {
    font-family: "futura-pt";
    src: url("https://use.typekit.net/af/2cd6bf/00000000000000000001008f/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"), url("https://use.typekit.net/af/2cd6bf/00000000000000000001008f/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"), url("https://use.typekit.net/af/2cd6bf/00000000000000000001008f/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");
    font-display: auto;
    font-style: normal;
    font-weight: 500;
    font-stretch: normal;
  }

  @font-face {
    font-family: "futura-pt";
    src: url("https://use.typekit.net/af/c4c302/000000000000000000012192/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2"), url("https://use.typekit.net/af/c4c302/000000000000000000012192/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff"), url("https://use.typekit.net/af/c4c302/000000000000000000012192/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("opentype");
    font-display: auto;
    font-style: normal;
    font-weight: 600;
    font-stretch: normal;
  }

  @font-face {
    font-family: "futura-pt-bold";
    src: url("https://use.typekit.net/af/053fc9/00000000000000003b9af1e4/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/053fc9/00000000000000003b9af1e4/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/053fc9/00000000000000003b9af1e4/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
    font-display: auto;
    font-style: normal;
    font-weight: 700;
    font-stretch: normal;
  }

  .form-box {
    font-family: futura-pt-bold, Arial, sans-serif;
    color: #697097;
    background-color: #fff;
    border: .1rem solid #dee0ea;
    border-radius: 0 10rem 10rem 10rem;
    margin: 3rem 0;
    padding: 5rem 9rem;
    position: relative;
  }

  .form-box::before {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 106 134'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M40.501 134H40.5C18.132 134 0 115.813 0 93.376V46c3.166 3.537 9.524 6.548 22.43 6.752h18.071C62.868 52.752 81 70.939 81 93.376S62.868 134 40.501 134' fill='%231D71B8'/%3E%3Cpath d='M85 46c11.598 0 21-9.507 21-21.235V0c-1.642 1.849-4.939 3.423-11.63 3.53H85c-11.598 0-21 9.506-21 21.235C64 36.493 73.402 46 85 46' fill='%23D20050'/%3E%3C/g%3E%3C/svg%3E");
    background-repeat: no-repeat;
    content: "";
    position: absolute;
    height: 13.4rem;
    left: -2.5rem;
    top: 4.7rem;
    width: 10.6rem;
  }

  .form-box__title {
    font-family: futura-pt-bold, Arial, sans-serif;
    color: #000000;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-left: 1rem;
    margin-bottom: 2rem;
  }

  p {
    font-family: futura-pt, Arial, sans-serif;
    color: #697097;
    font-size: 18px;
    line-height: 1.5;
    margin-top: 0;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  .entitled {
    font-family: futura-pt-bold, Arial, sans-serif;
    color: #000000;
    font-weight: 600;
  }
  </style>
</head>

<body>
  <div class="form-box">
    <h2 class="form-box__title">Demande de Support Design System ANS :</h2>
    <div class="form-recap">
      <div class="form-recap-content">
        <p><span class="entitled">Type de demande : </span><?= $request['type'] ?></p>
        <p><span class="entitled">Nom : </span><?= $request['lastname'] ?></p>
        <p><span class="entitled">Prénom : </span><?= $request['firstname'] ?></p>
        <p><span class="entitled">Adresse email : </span><?= $request['email'] ?></p>
        <p><span class="entitled">Direction : </span><?= $request['board'] ?></p>
        <p><span class="entitled">Objet : </span><?= $request['subject'] ?></p>
        <p><span class="entitled">Message : </span><br><?= nl2br($request['message']) ?></p>
      </div>
    </div>
  </div>
</body>

</html>

<?php
  $template = ob_get_clean();
?>