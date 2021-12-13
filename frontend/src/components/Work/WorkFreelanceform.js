import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './Work.css';

export default function WorkFreelanceform() {


    return (
        <div className='Container-work'>
            <div className=''>
                <div className='Work-title'>
                    <h3>ฟรีแลนต์ - Graphic & Design</h3>
                </div>
                <Row>
                    <Col className=''>
                        <div className='Work-box-image'>

                        </div>
                    </Col>
                    <Col className=''>
                        <div className='Work-box-detail'>
                            <h3>ชื่องาน</h3>
                            <h3>หมวดหมู่:      <text>test</text>              </h3>
                            <h3>ตำแหน่ง:      <text>test</text>              </h3>
                            <h3>จำนวน:       <text>test</text>              </h3>
                            <h3>เงินเดือน:     <text>test</text>             </h3>
                            <h3>วุฒิการศึกษา:  <text>test</text>               </h3>    
                            <h3>คำอธิบาย:     <text>test</text>               </h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                <Col className=''>
                    <div className='Company-box-detail'>
                    <h3>ชื่องาน</h3>
                            <h3>หมวดหมู่:      <text>test</text>              </h3>
                            <h3>ตำแหน่ง:      <text>test</text>              </h3>
                            <h3>จำนวน:       <text>test</text>              </h3>
                            <h3>เงินเดือน:     <text>test</text>             </h3>
                            <h3>วุฒิการศึกษา:  <text>test</text>               </h3>    
                            <h3>คำอธิบาย:     <text>test</text>               </h3>
                    </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}