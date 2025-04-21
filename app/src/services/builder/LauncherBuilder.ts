import Launcher from '@entity/launcher/launcher';

function createDefaultLauncher(): Launcher {
    return new Launcher(
        'C:\\Program Files (x86)\\MixMasterFR',
        'MixMaster.exe'
    );
}

export { createDefaultLauncher };
