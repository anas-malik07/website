import React, { Component } from 'react'
import { Alert, Button, Col, Grid, Nav, Navbar, NavbarBrand, NavItem, Row } from 'react-bootstrap'
import { Link } from 'react-scroll'
import { Picture } from 'react-responsive-picture'
import classNames from 'classnames'

import EmailForm from './EmailForm'
import PageSection from './PageSection'
import NavScrollItem from './NavScrollItem'
// import Snippet from './Snippet'
import * as Icons from './Icons'
import { Profile } from './Profile'
import { getSrc } from './utils'
import { actionTypes } from './redux'

import './app.css'

class App extends Component {
    state = {
        alertMessage: `NOTICE: As of ${ new Date().toLocaleDateString() }, we have not announced any token sale or air drop of any kind.`
    }

    render() {
        const sections = {
            HOME: 'home',
            SLACK: 'slack',
            GITHUB: 'github',
            MAILING_LIST: 'mailing-list',
            LEARN: 'learn',
            USES: 'uses',
            DESCRIPTION: 'description',
            TEAM: 'team',
            DEFINITION: 'definition',
            ADVISORS: 'advisors',
            PARTNERS: 'partners',
            SUPPORTERS: 'supporters',
            HIRING: 'hiring'
        }

        const WHITEPAPER_URL = 'https://keep.network/whitepaper'

        const { signupSlack, signupMailingList, ajaxRequestStates } = this.props
        const { alertMessage } = this.state

        return (
            <div className={classNames('App', {' has-alert': !!alertMessage })}>
                <Navbar fixedTop>
                    <Navbar.Header>
                        <NavbarBrand>
                            <Link activeClass="active" to={sections.HOME} smooth spy duration={500}><Icons.Keep height="61px" width="235px"/></Link>
                        </NavbarBrand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem
                                href={WHITEPAPER_URL}
                                rel="noopener noreferrer"
                                target="_blank">Whitepaper</NavItem>
                            <NavScrollItem to={sections.TEAM}>Team</NavScrollItem>
                            <NavScrollItem to={sections.ADVISORS}>Advisors</NavScrollItem>
                            <NavItem
                                href="https://blog.keep.network"
                                rel="noopener noreferrer"
                                target="_blank">Blog</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="main-content">
                    <PageSection id={sections.HOME}>
                        <Row>
                            <Col xs={7}>
                                <h1>A privacy layer for Ethereum</h1>
                                <p>A keep is an off-chain container for private data. Keeps help contracts harness the full power of the public blockchain &mdash; enabling deep interactivity with private data.</p>
                            </Col>
                            <Col xs={5} className="col-circles">
                                <Picture src={getSrc('/images/texture-circle', 'png', 3)} />
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.SLACK}>
                        <Row className="slack-signup">
                            <Col xs={7}>
                                <EmailForm
                                    label="Slack Email"
                                    placeholder="you@example.com"
                                    onSubmit={signupSlack}
                                    requestStates={ajaxRequestStates}
                                    request={actionTypes.SIGNUP_SLACK}>
                                    <h3>
                                        Join our community on
                                        <Icons.Slack color="#AC6E16"/>
                                    </h3>
                                </EmailForm>
                            </Col>
                            <Col xs={5} className="col-circles">
                                <div>
                                    <Picture src={getSrc('/images/texture-circle-2', 'png', 3)} />
                                </div>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.GITHUB}>
                        <Row>
                            <Col xs={12} md={12}>
                                <h3>
                                    View the
                                    <a
                                        className="github-logo"
                                        href="https://github.com/keep-network"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        GitHub
                                    </a>
                                    Repository
                                    <Button
                                        href="https://github.com/keep-network"
                                        bsStyle="primary"
                                        bsSize="large"
                                        rel="noopener noreferrer"
                                        target="_blank">
                                        <Icons.ArrowRight />
                                    </Button>
                                </h3>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.MAILING_LIST}>
                        <Row >
                            <Col xs={12} md={8} mdPush={2}>
                                <EmailForm
                                    label="Email"
                                    placeholder="you@example.com"
                                    onSubmit={signupMailingList}
                                    requestStates={ajaxRequestStates}
                                    request={actionTypes.SIGNUP_MAILING_LIST}>
                                        <h3>
                                            Join our mailing list
                                        </h3>
                                </EmailForm>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.LEARN}>
                        <div className="col">
                            <h2 className="h1">
                                Find out how to use Keep
                            </h2>
                        </div>
                        <div className="col">
                            <div>
                                <Icons.Book />
                                <h4>Whitepaper</h4>
                                <Button
                                    href={WHITEPAPER_URL}
                                    bsStyle="primary"
                                    download="Keep Whitepaper"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    bsSize="large">
                                    Download
                                </Button>
                            </div>
                            <div>
                                <Icons.Strategy />
                                <h4>Business Primer</h4>
                                <Button
                                    href="/KeepBusinessPrimer.pdf"
                                    bsStyle="primary"
                                    download="Keep Business Primer"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    bsSize="large">
                                    Download
                                </Button>
                            </div>
                        </div>
                    </PageSection>
                    <PageSection id={sections.DEFINITION} additionalClassNames={['blurb', 'blurb-desktop']}>
                        <div className="blurb-panel">
                            <div className="blurb-icon">
                                <Icons.CastleGate />
                            </div>
                            <div className="blurb-text">
                                <p>Keep: <span>(n.)</span></p>
                                <p>The strongest or central tower of a castle, acting as a final refuge</p>
                            </div>
                        </div>
                    </PageSection>
                    <PageSection id={sections.USES}>
                        <h2 className="h1">Keep Applications</h2>
                        <div className="use-case">
                            <Icons.Signing />
                            <h4>Decentralized Signing</h4>
                        </div>
                        <div className="use-case">
                            <Icons.Switch />
                            <h4>Dead Man Switch</h4>
                        </div>
                        <div className="use-case">
                            <Icons.Wallet />
                             <h4>Custodial Wallets</h4>
                        </div>
                        <div className="use-case">
                            <Icons.Cart />
                            <h4>Marketplaces for Digital Goods</h4>
                        </div>
                        <div className="use-case">
                            <Icons.BlockchainStorage />
                            <h4>Blockchain Storage Encryption</h4>
                        </div>
                        <div className="use-case">
                            <a href={WHITEPAPER_URL}
                                download="Keep Whitepaper"
                                rel="noopener noreferrer"
                                target="_blank">
                                <Icons.Book color="#48dbb4" />
                                <h4>Learn More in the Whitepaper</h4>
                            </a>
                        </div>
                        <div className="blurb-panel blurb-mobile">
                            <div className="blurb-icon">
                                <Icons.CastleGate />
                            </div>
                            <div className="blurb-text">
                                <p>Keep: <span>(n.)</span></p>
                                <p>The strongest or central tower of a castle, acting as a final refuge</p>
                            </div>
                        </div>
                        <div className="blurb-panel blurb-mobile">
                            <div className="blurb-icon">
                                <Icons.Axe />
                            </div>
                            <div className="blurb-text">
                                <p>Keeps provide a bridge between the world of public blockchains and private data. It enables a new wave of ground-up innovation for blockchain developers.</p>
                            </div>
                        </div>
                    </PageSection>
                    <PageSection id={sections.TEAM} collapsible>
                        <h2>Our Team</h2>
                        <Profile
                            name="Matt Luongo"
                            title="Project Lead"
                            imagePath="/images/headshots/matt"
                            imageMaxRes={3}
                            twitter="https://twitter.com/mhluongo"
                            linkedin="https://www.linkedin.com/in/mattluongo"
                            github="https://github.com/mhluongo"
                            keybase="http://keybase.io/mhluongo" />
                        <Profile
                            name="Corbin Pon"
                            title="Developer & Ops"
                            imagePath="/images/headshots/corbin"
                            imageMaxRes={3}
                            twitter="https://twitter.com/CorbinPon"
                            linkedin="https://www.linkedin.com/in/corbinpon"
                            github="https://github.com/clp16"
                            keybase="http://keybase.io/corbinpon"/>
                        <Profile
                            name="Antonio Salazar Cardozo"
                            title="Tech Lead"
                            imagePath="/images/headshots/antonio"
                            imageType="png"
                            imageMaxRes={3}
                            twitter="https://twitter.com/lightfiend"
                            linkedin="https://www.linkedin.com/in/lightfiend"
                            github="https://github.com/Shadowfiend"
                            keybase="http://keybase.io/shadowfiend" />
                        <Profile
                            name="Laura Wallendal"
                            title="Growth"
                            imagePath="/images/headshots/laura"
                            imageMaxRes={3}
                            twitter="https://twitter.com/LauraWallendal"
                            linkedin="https://www.linkedin.com/in/laurawallendal"
                            keybase="http://keybase.io/lwallendal" />
                        <Profile
                            name="Michael Gluzman"
                            title="Design Lead"
                            imagePath="/images/headshots/michael"
                            imageType="png"
                            imageMaxRes={3}
                            twitter="https://twitter.com/gluzman"
                            linkedin="https://www.linkedin.com/in/michaelgluzman/"
                            github="https://github.com/gluzman"
                            keybase="http://keybase.io/gluzzz" />
                        <Profile
                            name="Promethea Raschke"
                            title="Protocol Designer"
                            imagePath="/images/headshots/promethea"
                            imageType="png"
                            imageMaxRes={3}
                            github="https://github.com/eth-r" />
                        <Profile
                            name="Prashanth Irudayaraj"
                            title="Research Manager"
                            imagePath="/images/headshots/prashanth"
                            imageType="png"
                            imageMaxRes={3}
                            twitter="https://twitter.com/Zarathusthra"
                            linkedin="https://www.linkedin.com/in/pirudayaraj"
                            keybase="http://keybase.io/starsitar" />
                        <Profile
                            name="Nik Grinkevich"
                            title="Developer"
                            imagePath="/images/headshots/nik"
                            imageMaxRes={3}
                            twitter="https://twitter.com/ngrinkevich"
                            linkedin="https://www.linkedin.com/in/nikgrinkevich"
                            github="https://github.com/ngrinkevich"
                            keybase="https://keybase.io/nikgrinkevich" />
                        <Profile
                            name="Raghav Gulati"
                            title="Developer"
                            imagePath="/images/headshots/raghavGulati"
                            imageMaxRes={3}
                            twitter="https://twitter.com/rargulati"
                            linkedin="https://www.linkedin.com/in/rargulati/"
                            github="https://github.com/rargulati"
                            keybase="http://keybase.io/raj" />
                        <Profile
                            name="Philip Schlump"
                            title="Developer"
                            imagePath="/images/headshots/philipSchlump"
                            imageMaxRes={3}
                            twitter="https://twitter.com/pschlump"
                            linkedin="https://www.linkedin.com/in/philip-schlump-73100429/"
                            github="https://github.com/pschlump"
                            keybase="https://keybase.io/pschlump" />
                        <Profile
                            name="Piotr Dyraga"
                            title="Developer"
                            imagePath="/images/headshots/piotr"
                            imageMaxRes={3}
                            imageType="jpg"
                            twitter="https://twitter.com/piotrdyraga?lang=en"
                            linkedin="https://www.linkedin.com/in/piotrdyraga/"
                            github="https://github.com/pdyraga" />
                        <Profile
                            name="Jakub Nowakowski"
                            title="Developer"
                            imagePath="/images/headshots/jakub"
                            imageMaxRes={3}
                            imageType="jpg"
                            twitter="https://twitter.com/jnowakow8"
                            linkedin="https://www.linkedin.com/in/jnowakowski8/"
                            github="https://github.com/nkuba" />
                        <Profile
                            name="Erin Ng"
                            title="Developer"
                            imagePath="/images/headshots/erin"
                            imageMaxRes={3}
                            linkedin="https://www.linkedin.com/in/erinng/"
                            github="https://github.com/ironng"
                            keybase="http://keybase.io/ironng" />
                        <Profile
                            name="Marcin Pawlowski"
                            title="Developer"
                            imagePath="/images/headshots/marcin"
                            imageType="png"
                            imageMaxRes={3}
                            twitter="https://twitter.com/mpspp"
                            linkedin="https://www.linkedin.com/in/mpspp/"
                            github="https://github.com/madxor"
                            keybase="http://keybase.io/mpp" />
                        <Profile
                            name="Markus Fix"
                            title="Developer"
                            imagePath="/images/headshots/markus"
                            imageType="png"
                            imageMaxRes={3}
                            twitter="https://twitter.com/lispmeister"
                            linkedin="https://www.linkedin.com/in/lispmeister/"
                            github="https://github.com/lispmeister"
                            keybase="http://keybase.io/lispmeister" />
                        <Profile
                            name="Nicholas Evans"
                            title="Developer"
                            imagePath="/images/headshots/nicholas"
                            imageType="png"
                            imageMaxRes={3}
                            twitter="https://twitter.com/NicholasEvans14"
                            github="https://github.com/NicholasDotSol"
                            keybase="http://keybase.io/evansnicholaskb" />
                        <Profile
                            name="Eliza Petrovska"
                            title="Community and Content Manager"
                            imagePath="/images/headshots/elizapetrovska_1"
                            imageType="png"
                            imageMaxRes={3}
                            twitter="https://twitter.com/elizapetrovska"
                            linkedin="https://www.linkedin.com/in/elizapetrovska/"
                            github="https://github.com/elizapetrovska"
                            keybase="http://keybase.io/elizapetrovska" />
                        <Profile
                            name="Aaron O'Hearn"
                            title="Growth Operations"
                            imagePath="/images/headshots/aaron"
                            imageType="png"
                            imageMaxRes={1}
                            twitter="https://twitter.com/aaron0"
                            linkedin="https://www.linkedin.com/in/aaronohearn/"
                            keybase="https://keybase.io/aohearn" />
                    </PageSection>
                    <PageSection id={sections.DESCRIPTION} additionalClassNames={['blurb', 'blurb-desktop']}>
                        <div className="blurb-panel">
                            <div className="blurb-icon">
                                <Icons.Axe />
                            </div>
                            <div className="blurb-text">
                                <p>Keeps provide a bridge between the world of public blockchains and private data. It enables a new wave of ground-up innovation for blockchain developers.</p>
                            </div>
                        </div>
                    </PageSection>
                    <PageSection id={sections.ADVISORS} collapsible>
                        <h2>Our Advisors</h2>
                        <Profile
                            name="Brayton Williams"
                            title="Boost VC"
                            imagePath="/images/headshots/brayton"
                            imageMaxRes={3}
                            twitter="https://twitter.com/BraytonKey"
                            linkedin="https://www.linkedin.com/in/braytonwilliams" />
                        <Profile
                            name="John Packel"
                            title="Hard Core Decentralization Developer"
                            imagePath="/images/headshots/john"
                            imageMaxRes={3}
                            twitter="https://twitter.com/jpackel"
                            linkedin="https://www.linkedin.com/in/johnpackel" />
                        <Profile
                            name="James Prestwich"
                            title="Summa, formerly Storj Labs"
                            imagePath="/images/headshots/jamesPrestwich"
                            imageMaxRes={3}
                            linkedin="https://www.linkedin.com/in/prestwich" />
                        <Profile
                            name="Axel Blikstad"
                            title="International Finance"
                            imagePath="/images/headshots/axel"
                            imageMaxRes={3}
                            linkedin="https://www.linkedin.com/in/axel-blikstad-77534814" />
                        <Profile
                            name="Joseph Urgo"
                            title="district0x"
                            imagePath="/images/headshots/josephUrgo"
                            imageMaxRes={3}
                            twitter="https://twitter.com/jfurgo?lang=en"
                            linkedin="https://www.linkedin.com/in/joseph-urgo-a8b77983/" />
                        <Profile
                            name="Luis Cuende"
                            title="Aragon"
                            imagePath="/images/headshots/luisCuende"
                            imageMaxRes={3}
                            twitter="https://twitter.com/licuende?lang=en"
                            linkedin="https://www.linkedin.com/in/luisivancuende/" />
                    </PageSection>
                    <PageSection id={sections.PARTNERS} convex>
                        <h2>Our Partners</h2>
                        <Row>
                            <Col xs={12} sm={4} smPush={1}>
                                <a href="https://www.lendroid.com/" rel="noopener noreferrer" target="_blank">
                                    <Picture src={getSrc('/images/logos/lendroidLogo', 'png', 3)} />
                                </a>
                            </Col>
                            <Col xs={12} sm={4} smPush={3}>
                                <a href="https://district0x.io/" rel="noopener noreferrer" target="_blank">
                                    <Picture src={getSrc('/images/logos/district0x_logo', 'png', 3)} />
                                </a>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.SUPPORTERS} convex>
                        <h2>Our Supporters</h2>
                        <Row>
                            <Col xs={12} sm={4}>
                                <a href="http://polychain.capital/" rel="noopener noreferrer" target="_blank">
                                    <Picture src={getSrc('/images/logos/polychainLogo', 'png', 3)} />
                                </a>
                            </Col>
                            <Col xs={12} sm={4}>

                                <a href="https://a16z.com/" rel="noopener noreferrer" target="_blank">
                                    <Picture src={getSrc('/images/logos/andreessenHorowitzLogo', 'png', 3)} />
                                </a>
                            </Col>
                            <Col xs={12} sm={4}>
                                <a href="http://www.dhvc.com/" rel="noopener noreferrer" target="_blank">
                                    <Picture src={getSrc('/images/logos/DHVCLogo', 'png', 3)} />
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={4}>
                                <a href="http://www.draper.vc/" rel="noopener noreferrer" target="_blank">
                                    <Picture src={getSrc('/images/logos/draperAssociatesLogo', 'png', 3)} />
                                </a>
                            </Col>
                            <Col xs={12} sm={4}>
                                <a href="https://www.distributedcapital.io/" rel="noopener noreferrer" target="_blank">
                                    <Picture src={getSrc('/images/logos/distributedCapitalPartnersLogo', 'png', 3)} />
                                </a>
                            </Col>
                            <Col xs={12} sm={4}>
                                <a href="https://www.fabric.vc/" rel="noopener noreferrer" target="_blank">
                                    <Picture src={getSrc('/images/logos/fabricVenturesLogo', 'png', 3)} />
                                </a>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.HIRING} convex>
                        <Row>
                            <Col sm={12} md={8}>
                                <h2>Interested in working with us?</h2>
                                <h3>

                                    email
                                    <a className="email-text" href="mailto:work@keep.network">
                                        work@keep.network
                                    </a>
                                    <a className="btn btn-primary" href="mailto:work@keep.network">
                                        <Icons.ArrowRight/>
                                    </a>
                                </h3>
                            </Col>
                        </Row>
                    </PageSection>
                    <footer>
                        <Grid>
                            <div className="footer-columns">
                                <div className="footer-column-1">
                                    <Icons.KeepCircle />
                                </div>
                                <ul className="footer-column-2">
                                    <li><a href={WHITEPAPER_URL} rel="noopener noreferrer" target="_blank">Whitepaper</a></li>
                                    <li><a href="#team">Team</a></li>
                                    <li><a href="#advisors">Advisors</a></li>
                                    <li><a href="https://blog.keep.network" rel="noopener noreferrer" target="_blank">Blog</a></li>
                                </ul>
                                <ul className="footer-column-3">
                                    <li><a href="https://twitter.com/keep_project" rel="noopener noreferrer" target="_blank">Twitter</a></li>
                                    <li><a href="https://t.me/KeepNetworkOfficial/" rel="noopener noreferrer" target="_blank">Telegram</a></li>
                                    <li><a href="https://www.reddit.com/r/KeepNetwork/" rel="noopener noreferrer" target="_blank">Reddit</a></li>
                                </ul>
                            </div>
                            <span>&#169; 2019 Keep. All Rights Reserved.</span>
                            <Picture className="half-circle" src={getSrc('/images/texture-circle-3', 'png', 3)} />
                        </Grid>
                    </footer>
                </div>
                { alertMessage && <Alert bsStyle="info">
                        <p>{ alertMessage }</p>
                    </Alert> }
            </div>
        )
    }
}

export default App
