import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>หมวดหมู่ของงาน</h2>
            <Link to='/'>Design & graphic</Link>
            <Link to='/'>การตลาด</Link>
            <Link to='/'>Programming</Link>
          </div>
          <div class='footer-link-items'>
            <h2>คำถามที่พบบ่าย</h2>
            <Link to='/'>1.โลโก้ เป็นตัวอะไร</Link>
            <Link to='/'>2.โลมา ,มินิริว ,จิ้งจอก มันเป็นตัวอะไรครับ</Link>
            <Link to='/'>3.ก๋วยเตี๋ยว กับข้าวมันไก่ เมื่อไรเขาจะรักผมครับ</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>เกี่ยวกับเรา</h2>
            <Link to='/'>Design & graphic</Link>
            <Link to='/'>การตลาด</Link>
            <Link to='/'>Programming</Link>
          </div>
          <div class='footer-link-items'>
            <h2>ติดต่อเรา</h2>
            <a>Email 62050230@kmitl.ac.th</a>
            <a>โทร 099-297-9490</a>
            <a>เวลาทำการ 09:00:00 - 09:00:01</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
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
              class='social-icon-link email'
              to='/'
              target='_blank'
              aria-label='Email'
            >
              <i class="far fa-envelope" />
            </Link>
            <Link
              class='social-icon-link line'
              to='/'
              target='_blank'
              aria-label='Line'
            >
              <i class="fab fa-line" />
            </Link>
            <Link
              class='social-icon-link Call'
              to='/'
              target='_blank'
              aria-label='Call'
            >
              <i class="fas fa-phone-alt" />
            </Link>
          </div>
          </div>
          <large class='website-rights'>สงวนลิขสิทธ์ Jop Tech Inc.</large>
        </div>
      </section>
    </div>
  );
}

export default Footer;
