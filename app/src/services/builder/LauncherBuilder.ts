import Launcher from '@entity/launcher/launcher';

/**
 * Get the default launcher emplacement
 * 
 * @returns default launcher
 */
function createDefaultLauncher(): Launcher {
    return new Launcher(
        'C:\\Program Files (x86)\\MixMasterFR',
        'MixMaster.exe'
    );
}

export { createDefaultLauncher };
