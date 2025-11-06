function save() {
  const zohoOauthToken = document.getElementById("oauthToken").value.trim();
  const clientId = document.getElementById("clientId").value.trim();
  const clientSecret = document.getElementById("clientSecret").value.trim();
  const refreshToken = document.getElementById("refreshToken").value.trim();

  chrome.storage.sync.set(
    { zohoOauthToken, clientId, clientSecret, refreshToken },
    () => {
      const s = document.getElementById("status");
      s.textContent = "Token gespeichert";
      s.style.color = "green";
      setTimeout(() => (s.textContent = ""), 2000);
    }
  );
}

function clearAll() {
  chrome.storage.sync.set(
    { zohoOauthToken: "", clientId: "", clientSecret: "", refreshToken: "" },
    () => {
      const s = document.getElementById("status");
      s.textContent = "Gelöscht";
      s.style.color = "orange";
      setTimeout(() => (s.textContent = ""), 2000);
    }
  );
}

function show() {
  chrome.storage.sync.get(
    ["zohoOauthToken", "clientId", "clientSecret", "refreshToken"],
    (v) => {
      alert(
        `Access: ${v.zohoOauthToken || ""}\nClient ID: ${v.clientId || ""}\nClient Secret: ${v.clientSecret || ""}\nRefresh: ${v.refreshToken || ""}`
      );
    }
  );
}

document.getElementById("save").addEventListener("click", save);
document.getElementById("clear").addEventListener("click", clearAll);
document.getElementById("show").addEventListener("click", show);
