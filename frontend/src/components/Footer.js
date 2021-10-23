import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>เกี่ยวกับเรา</h2>
            <Link to='/'>Design & graphic</Link>
            <Link to='/'>การตลาด</Link>
            <Link to='/'>Programming</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Email</Link>
            <Link to='/'>โทร</Link>
            <Link to='/'>เวลาทำการ 00:00 - 00:01</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>หมวดหมู่ของงาน</h2>
            <Link to='/'>Design & graphic</Link>
            <Link to='/'>การตลาด</Link>
            <Link to='/'>Programming</Link>
          </div>
          <div class='footer-link-items'>
            <h2>คำถามที่พบบ่าย</h2>
            <Link to='/'>คำถาม1</Link>
            <Link to='/'>คำถาม2</Link>
            <Link to='/'>คำถาม3</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              JobMaiFair
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>jopjop</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            <large class='website-rights'>สงวนลิขสิทธิ์ ทำไม</large>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
