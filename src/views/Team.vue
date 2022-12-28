<template id="">
  <!-- <img class="team-cover" src="team.webp" alt=""> -->
  <div class="team-cover">
    <h4 style="color: white; font-size:45px;"><span style="color: #FF2B06;">Meet</span> The Team</h4>
  </div>
  <div class="team-section">
    <p class="content-info-text">
      The community and conversations we create through these events are just as important to us as the ideas themselves.
      <p class="content-info-text">
        At TEDxMaitighar, we are an entirely student run committee who believe in the power of great ideas.
      </p>
    </p>
    <div class="team-pics">
      <div class="team-member">
        <img src="facebook.svg" alt="facebook">
        <p class="member-name">Sid Shrestha</p>
        <p class="member-role">Organizer</p>
      </div>
      <div class="team-member">
        <img src="facebook.svg" alt="facebook">
        <p class="member-name">Ishika Panta</p>
        <p class="member-role">Co-organizer</p>
      </div>
      <!-- <div class="team-member">
        <img src="facebook.svg" alt="facebook">
        <p class="member-name">Shubhechchhak Pokhrel</p>
        <p class="member-role">Organizer/Technical lead</p>
      </div> -->
    </div>
    <!-- <div class="team-pics">
      <div class="team-member">
        <img src="facebook.svg" alt="facebook">
        <p class="member-name">Shubhechchhak Pokhrel</p>
        <p class="member-role">Organizer/Technical lead</p>
      </div>
      <div class="team-member">
        <img src="facebook.svg" alt="facebook">
        <p class="member-name">Shubhechchhak Pokhrel</p>
        <p class="member-role">Organizer/Technical lead</p>
      </div>
      <div class="team-member">
        <img src="facebook.svg" alt="facebook">
        <p class="member-name">Shubhechchhak Pokhrel</p>
        <p class="member-role">Organizer/Technical lead</p>
      </div>
    </div>
    <div class="team-pics">
      <div class="team-member">
        <img src="facebook.svg" alt="facebook">
        <p class="member-name">Shubhechchhak Pokhrel</p>
        <p class="member-role">Organizer/Technical lead</p>
      </div>
      <div class="team-member">
        <img src="facebook.svg" alt="facebook">
        <p class="member-name">Shubhechchhak Pokhrel</p>
        <p class="member-role">Organizer/Technical lead</p>
      </div>
      <div class="team-member">
        <img src="facebook.svg" alt="facebook">
        <p class="member-name">Shubhechchhak Pokhrel</p>
        <p class="member-role">Organizer/Technical lead</p>
      </div>
    </div> -->
  </div>
</template>

<style media="screen">


.team-cover{
  min-height: 80vh;
  background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/team.webp);
  background-size: 100%;
  background-repeat: no-repeat;
  display:flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  background-attachment: fixed;
}
.team-section{
    margin: 5% 16%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    /* tex */
    text-align: center;
}
.team-pics, .team-pics-leaders{
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    justify-content: space-around;
    align-content: center;
}
.team-pics-leaders{
      justify-content: space-around;
}
.team-pics img{
    width: 200px;
    height: 200px;
}
.team-member{
    font-family: Montserrat;
    font-style: normal;
    font-size: 14px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.015em;
}
.member-name{
    font-weight: bold;
    font-size: 16px;
}
.member-role{
    font-weight: normal;
}
.team-member p{
    margin: 0;
    padding: 0;
}
@media only screen and (max-width: 600px) {
    .team-cover{
        background-size: 250%;
    }

    .team-section{
        margin: 10px 20px;
    }

    .team-member{
        margin: 20px 0px;
    }
}


</style>
