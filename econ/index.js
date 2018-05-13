var __economy__ = null;
var vault = loader.server.pluginManager.getPlugin('Vault');
if (vault != null) {
    var econProvider = loader.server.servicesManager.getRegistration(java.lang.Class.forName("net.milkbowl.vault.economy.Economy", false, vault["class"].classLoader));

    if (econProvider != null) {
        __economy__ = econProvider.provider;
    } else {
        log("[Econ.js] Could not load economy from class loader.", 'c');
    }
} else {
    log("[Econ.js] Could not load economy (do you have vault installed?)", 'c');
}

if (__economy__ == null) return;

var economyResponse = function(response) {
    this.success = response.type == response.type.SUCCESS;
    this.amount = response.amount;
    this.balance = response.balance;
    this.errorMessage = "" + response.errorMessage;
}

exports.withdraw = function(player, amount) {
    return new economyResponse(__economy__.withdrawPlayer(player, amount));
}

exports.deposit = function(player, amount) {
    return new economyResponse(__economy__.depositPlayer(player, amount));
}

exports.balance = function(player) {
    return __economy__.getBalance(player);
}

exports.exists = function(player) {
    return __economy__.hasAccount(player);
}

exports.has = function(player, amount) {
    return __economy__.has(player, amount);
}
