import React from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/AnimatedProjectsHero.css"

const AnimatedProjectsHero = () => {
    function AnimatedProjectsHeroGraphic() {
        const sketch = (p) => {
            let cw, ch;
            let hexSize, h, w, hexWeight;
            let palettes = [
                ["#E5C1BD", "#662E9B", "#43BCCD"],//NO
                ["#7FB069", "#D36135", "#02020B"],
                ["#33888a", "#57c1ac", "#233e3c"],
                // ["#e7cb2b", "#1a8e1c", "#274e82"], //NO
                // ['#cc1071', '#8bee20', '#235a8f'], //maybe
                // ["#717574", "#DBC665", "#603D69"], //NO
                // ["#ECED8C", "#591258", "#238A8C"], //NO
                // ["#7a6894", "#4e88b0", "#e3bfa6"], //NO
                ['#000000', '#832161', '#DA4167'],
            ];
            let palette, paletteIndex;
            let delayFrames = 20;
            let cycleFrames = 100;
            let maxDist;
            let fc = -1;
            let paused = false;
            let texture;

            // Helper functions
            let easing = (x) => {
                return x * x * x;
            };

            let granulate = (gA) => {
                let s = 2 * maxDist;
                let gc = p.createGraphics(s, s);
                gc.loadPixels();
                let d = gc.pixelDensity();
                let halfImage = 4 * (s * d) * (s * d);
                for (let ii = 0; ii < halfImage; ii += 4) {
                    let grainAmount = p.random(-gA, gA);
                    gc.pixels[ii] = gc.pixels[ii] + grainAmount;
                    gc.pixels[ii + 1] = gc.pixels[ii + 1] + grainAmount;
                    gc.pixels[ii + 2] = gc.pixels[ii + 2] + grainAmount;
                    gc.pixels[ii + 3] = gc.pixels[ii + 3] + gA;
                }
                gc.updatePixels();
                return gc;
            };

            let getPoints = (size) => {
                let points = [];
                for (let i = 0; i < 6; i++) {
                    let angle = p.PI / 3 * i;
                    points.push([size * p.cos(angle), size * p.sin(angle)]);
                }
                return points;
            };

            let getRotation = (x, y, totalAngle) => {
                let activeFrames = cycleFrames - delayFrames;
                let frame = fc % cycleFrames;
                let factor = p.map(p.dist(x, y, 0, 0), 0, maxDist, 1, 0, true);
                let startFrame = p.floor(delayFrames * factor);

                if (frame < startFrame) {
                    return 0;
                } else if (frame > startFrame + activeFrames) {
                    return totalAngle;
                }

                let eased = easing(p.map(frame, startFrame, startFrame + activeFrames, 0, 1));
                return eased * totalAngle;
            };

            let drawBgHex = (size, x, y) => {
                let colors = [...palette];
                let invert = p.floor(fc / cycleFrames) % 2 === 1;

                p.noStroke();
                if (invert) {
                    p.translate(size, 0);
                    p.scale(-1, -1);
                }

                for (let i = 0; i < 3; i++) {
                    p.push();
                    let startRotation = (p.floor(fc / cycleFrames) % 3) * ((2 * p.PI) / 3);
                    let rotation = getRotation(x, y, (2 * p.PI) / 3);
                    p.rotate(startRotation + rotation);
                    p.rotate((p.PI / 3) * 2 * i);
                    p.fill(colors[(i + 2 - !!invert) % 3]);
                    let outerPoints = getPoints(size);
                    p.triangle(0, 0, outerPoints[0][0], outerPoints[0][1], outerPoints[1][0], outerPoints[1][1]);
                    p.fill(colors[(i + 1 + !!invert) % 3]);
                    p.triangle(0, 0, outerPoints[0][0], outerPoints[0][1], outerPoints[5][0], outerPoints[5][1]);
                    p.pop();
                }
            };

            let drawFgHex = (size, x, y) => {
                let colors = [...palette];
                let dx = -hexWeight / 2;
                let dy = hexWeight * p.sin(p.PI / 3);
                let invert = p.floor(fc / cycleFrames) % 2 === 1;
                let _colorOrders = [[0, 1, 2], [1, 0, 2], [2, 0, 1], [2, 1, 0], [1, 2, 0], [0, 2, 1]];

                if (invert) {
                    p.translate(size, 0);
                    p.scale(-1, 1);
                }

                let cycle = p.floor(fc / cycleFrames) % 6;
                colors = _colorOrders[cycle].map((i) => colors[i]);

                let startRotation = (p.floor(fc / cycleFrames) % 3) * ((2 * p.PI) / 3);
                let rotation = getRotation(x, y, (2 * p.PI) / 3);
                p.rotate(startRotation + rotation);
                p.strokeWeight(0.5);
                p.stroke(0);

                let outerPoints = getPoints(size);
                let innerPoints = getPoints(size - hexWeight);

                for (let i = 0; i < 3; i++) {
                    p.push();
                    p.rotate((p.PI / 3) * 2 * i);
                    p.fill(colors[i]);
                    p.beginShape();
                    p.vertex(outerPoints[0][0], outerPoints[0][1]);
                    p.vertex(outerPoints[1][0], outerPoints[1][1]);
                    p.vertex(0, 0);
                    p.vertex(outerPoints[5][0], outerPoints[5][1]);
                    p.beginContour();
                    p.vertex(innerPoints[0][0], innerPoints[0][1]);
                    p.vertex(innerPoints[5][0] - dx, innerPoints[5][1] + dy);
                    p.vertex(-2 * dx, 0);
                    p.vertex(innerPoints[1][0] - dx, innerPoints[1][1] - dy);
                    p.endContour();
                    p.endShape(p.CLOSE);
                    p.pop();
                }
            };

            // p5.js setup
            p.setup = () => {
                // cw = p.windowWidth;
                // ch = p.windowHeight;
                cw = window.innerWidth;
                ch = window.innerHeight;
                hexSize = p.random(80, 120);
                maxDist = p.dist(0, 0, cw / 2, ch / 2);
                p.createCanvas(cw, ch);
                texture = granulate(100);

                h = hexSize * p.sin(p.PI / 3) * 2;
                w = (hexSize * 3) / 2;
                if (p.random() < 0.7) {
                    hexWeight = hexSize / p.random(2.5, 4);
                } else {
                    hexWeight = hexSize / p.random(4, 8);
                }

                paletteIndex = p.floor(p.random(palettes.length));
                palette = palettes[paletteIndex];
                p.pixelDensity(1);
            };

            // p5.js draw
            p.draw = () => {
                if (!paused) { fc++; }
                if (paused) {
                    if (p.keyIsDown(p.LEFT_ARROW)) {
                        fc = p.max(fc - 1, 0);
                    } else if (p.keyIsDown(p.RIGHT_ARROW)) {
                        fc++;
                    }
                }

                let index = p.floor(fc / cycleFrames) % 3;
                if (index < 0) { index = 3 + index; }
                p.background(palette[index]);
                let sx = p.ceil(cw / (3 * hexSize)) + 2;
                let sy = p.ceil(ch / (4 * hexSize)) + 2;

                p.push();
                p.translate(cw / 2, ch / 2);
                for (let x = -sx; x <= sx; x++) {
                    for (let y = -sy; y <= sy; y++) {
                        let px = x * w;
                        let py = y * h;
                        if (x % 2) { py += h / 2; }
                        p.push();
                        p.translate(px, py);
                        drawBgHex(hexSize, px, py);
                        p.pop();
                    }
                }
                for (let x = -sx; x <= sx; x++) {
                    for (let y = -sy; y <= sy; y++) {
                        let px = x * w;
                        let py = y * h;
                        if (x % 2) { py += h / 2; }
                        p.push();
                        p.translate(px, py);
                        drawFgHex(hexSize, px, py);
                        p.pop();
                    }
                }
                p.pop();

                p.blendMode(p.DODGE);
                p.image(texture, 0, 0);
                p.blendMode(p.BLEND);
            };

            // p5.js keyPressed
            p.keyPressed = () => {
                if (p.keyCode === 32) { // Space bar
                    if (palettes.length > 1) {
                        let nc = p.floor(p.random(palettes.length));
                        while (nc === paletteIndex) {
                            nc = p.floor(p.random(palettes.length));
                        }
                        paletteIndex = nc;
                        palette = palettes[paletteIndex];
                    }
                }
                if (p.keyCode === 82) { // R
                    fc = 0;
                }
                if (p.keyCode === 80) { // P
                    paused = !paused;
                }
            };
        };

        return <ReactP5Wrapper sketch={sketch} />;
    }

    return(
        <div>
            <Container className='projects-opaque-container' fluid>
                <div id='projects-animated-squares'>
                    <AnimatedProjectsHeroGraphic />
                </div>
                <Row>
                    <Col xs ={12} className='projects-hero-top'>
                    </Col>
                    <Col xs ={10} className='projects-anim-hero-content'>
                        <h1>Blueprints of Brilliance</h1>
                        <h2>Intellectuals blend cutting-edge technology with practical functionality, driving progress with each solution."</h2>
                    </Col>
                    <Col>

                    </Col>
                    <Col xs ={2} className='projects-hero-bottom'>
                    </Col>
                    <Col xs ={12} className='projects-hero-bottom'>
                        <h2 id = "project-arrow-down-text" className="text-above-arrow">Scroll Down</h2>
                        <div id = "project-arrow-down" className={'arrow'}>
                            <i className="bi bi-arrow-bar-down arrow"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );


}

export {AnimatedProjectsHero};