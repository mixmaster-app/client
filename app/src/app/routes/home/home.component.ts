import { Component, EventEmitter, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { random } from "@services/random";
import { GameActions } from "reducer/game/game.action";
import { getGameExePath } from "reducer/game/game.selector";

@Component({
    standalone: false,
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.css',
})
export class HomeComponent {

    particles: any[] = [];
    exeFullPath$ = this.store.select(getGameExePath);

    constructor(private store: Store) { }

    ngOnInit() {
        this.particles = this.getLoopArray(150);
    }

    public setExe() {
        this.store.dispatch(GameActions.setPath({ path: "test"}));
    }

    private getLoopArray(count: number): any[] {
        return (Array(count)).fill(0).map(() => {
            const particle = this.getRandomParticleValues();
            return `--x:${particle.x}; --y:${particle.y}; --xt:${particle.xt}; --yt:${particle.yt}; --xd:${particle.xd}; --yd:${particle.yd}; --w:${particle.w}; --o:${particle.o};`;
        });
    }

    private getRandomParticleValues() {
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
