import { Component, EventEmitter, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { random } from "@services/random";
import { GameActions } from "reducer/game/game.action";
import { getGamePath } from "reducer/game/game.selector";

@Component({
    standalone: false,
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.css',
})
export class HomeComponent {

    particles: any[] = [];
    gamePath$ = this.store.select(getGamePath);

    constructor(private store: Store) { }

    ngOnInit() {
        this.particles = this.getListOfRandomParticles(150);
    }

    public setGamePath() {
        this.store.dispatch(GameActions.setPath({ path: "test"}));
    }

    /**
     * Get a list of random particles formated
     * 
     * @param count number of particles to generate
     * @returns a list of random particles
     */
    private getListOfRandomParticles(count: number): any[] {
        return (Array(count)).fill(0).map(() => {
            const particle = this.generateOneRandomParticle();
            return `--x:${particle.x}; --y:${particle.y}; --xt:${particle.xt}; --yt:${particle.yt}; --xd:${particle.xd}; --yd:${particle.yd}; --w:${particle.w}; --o:${particle.o};`;
        });
    }

    /**
     * Generate a random particle values
     * 
     * @returns random particle values
     */
    private generateOneRandomParticle() {
        return {
            x: random(0, 100),
            y: random(0, 100),
            xt: random(5, 20),
            yt: random(5, 20),
            xd: random(5, 20) / 10,
            yd: random(5, 20) / 10,
            w: random(35, 70),
            o: random(1, 9) / 10
        }
    }
}
