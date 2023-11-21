/* eslint-disable jsx-a11y/anchor-is-valid */
import facebookIcon from "../../assets/img/facebookIcon.png"
import instagramIcon from "../../assets/img/instagramIcon.png"
import whatsappIcon from "../../assets/img/whatsappIcon.png"
import gitHub from "../../assets/img/gitHub.png"

const Footer = () => {

    return (
        <>
            {<footer className="bg-dark text-center text-white footer" >
                <div className="container p-4">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1 aImgIconFooter" href="#!" role="button">
                            <img src={facebookIcon} alt={"facebookCommerce"} />
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1 aImgIconFooter" href="#!" role="button">
                            <img src={instagramIcon} alt="instagramCommerce" />
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1 aImgIconFooter" href="#!" role="button">
                            <img src={whatsappIcon} alt="whatsappIconCommerce" />
                        </a>
                        <a target="_blank" rel="noreferrer" className="btn btn-outline-light btn-floating m-1 aImgIconFooter" href="https://github.com/ederromero28" role="button">
                            <img src={gitHub} alt="gitHubCommerce" />
                        </a>
                    </section>
                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" className="form-control" />
                                        <label className="form-label" htmlFor="form5Example21">Email address</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section className="mb-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                            eum harum corrupti dicta, aliquam sequi voluptate quas.
                        </p>
                    </section>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2022
                    <a target="_blank" className="text-white copyright">Ecommerce</a>
                </div>
            </footer>
            }
        </>
    )
}

export default Footer