import React from "react";

function SchoolAchivemets() {
  return (
    <section className="layout-pt-lg layout-pb-lg section-bg">
      <div className="section-bg__item bg-light-6"></div>

      <div className="container">
        <div className="row y-gap-20 justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle ">
              <h2 className="sectionTitle__title ">School Achievements</h2>

              <p className="sectionTitle__text ">
                10,000+ unique online course list designs
              </p>
            </div>
          </div>
        </div>

        <div className="row pt-60">
          <div className="col-lg-3 col-md-6">
            <div className="infoCard -type-2 text-center py-40 -infoCard-hover">
              <div className="infoCard__image">
                <img src="/assets/img/home-3/achieve/1.svg" alt="image" />
              </div>
              <h5 className="infoCard__title text-24 lh-1 mt-25">350,000+</h5>
              <p className="infoCard__text mt-5">Students worldwide</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="infoCard -type-2 text-center py-40 -infoCard-hover">
              <div className="infoCard__image">
                <img src="/assets/img/home-3/achieve/2.svg" alt="image" />
              </div>
              <h5 className="infoCard__title text-24 lh-1 mt-25">496,00+</h5>
              <p className="infoCard__text mt-5">Total course views</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="infoCard -type-2 text-center py-40 -infoCard-hover">
              <div className="infoCard__image">
                <img src="/assets/img/home-3/achieve/3.svg" alt="image" />
              </div>
              <h5 className="infoCard__title text-24 lh-1 mt-25">19,000+</h5>
              <p className="infoCard__text mt-5">Five-star course reviews</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="infoCard -type-2 text-center py-40 -infoCard-hover">
              <div className="infoCard__image">
                <img src="/assets/img/home-3/achieve/4.svg" alt="image" />
              </div>
              <h5 className="infoCard__title text-24 lh-1 mt-25">987,000+</h5>
              <p className="infoCard__text mt-5">Students community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SchoolAchivemets;
