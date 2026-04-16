/* SPLENT terminal typewriter — vanilla port of the React component.
   Cycles the script forever, same pacing and tone colours. */
(function () {
  var mount = document.getElementById("splent-terminal");
  if (!mount) return;

  var script = [
    { kind: "prompt", text: "splent feature:install splent-io/splent_feature_auth --pinned" },
    { kind: "out",    text: "→ resolving UVL constraints...", tone: "dim" },
    { kind: "out",    text: "✓ feature pinned @ 1.4.2", tone: "ok" },
    { kind: "prompt", text: "splent feature:install splent-io/splent_feature_profile --pinned" },
    { kind: "out",    text: "✓ feature pinned @ 0.9.1", tone: "ok" },
    { kind: "prompt", text: "splent product:derive --dev" },
    { kind: "out",    text: "▸ validating model (UVL satisfiability)", tone: "info" },
    { kind: "out",    text: "▸ checking contract compatibility", tone: "info" },
    { kind: "out",    text: "▸ merging docker-compose + env", tone: "info" },
    { kind: "out",    text: "▸ applying migrations in dependency order", tone: "info" },
    { kind: "out",    text: "✓ product ready — http://localhost:5000", tone: "ok" }
  ];

  var toneClass = function (tone) {
    switch (tone) {
      case "ok":   return "text-emerald-400";
      case "info": return "text-brand-300";
      case "warn": return "text-amber-300";
      default:     return "text-white/50";
    }
  };

  var lineIndex = 0;
  var charIndex = 0;
  var timer = null;

  function render() {
    var html = "";
    // Already typed-out lines
    for (var i = 0; i < lineIndex && i < script.length; i++) {
      var l = script[i];
      if (l.kind === "prompt") {
        html += '<div class="whitespace-pre-wrap"><span class="text-amber-450">❯</span> <span class="text-white/90">' + escapeHtml(l.text) + '</span></div>';
      } else {
        html += '<div class="whitespace-pre-wrap"><span class="' + toneClass(l.tone) + '">' + escapeHtml(l.text) + '</span></div>';
      }
    }

    // In-progress line (cursor)
    if (lineIndex < script.length) {
      var cur = script[lineIndex];
      var typed = cur.text.slice(0, charIndex);
      if (cur.kind === "prompt") {
        html += '<div class="whitespace-pre-wrap"><span class="text-amber-450">❯</span> <span class="text-white/90">' + escapeHtml(typed) + '</span><span class="inline-block w-[7px] h-[15px] -mb-[2px] bg-white/80 animate-blink"></span></div>';
      } else {
        html += '<div class="whitespace-pre-wrap"><span class="' + toneClass(cur.tone) + '">' + escapeHtml(typed) + '</span></div>';
      }
    }

    mount.innerHTML = html;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function step() {
    if (lineIndex >= script.length) {
      // Loop
      timer = setTimeout(function () {
        lineIndex = 0;
        charIndex = 0;
        render();
        step();
      }, 3200);
      return;
    }

    var cur = script[lineIndex];
    var typingSpeed = cur.kind === "prompt" ? 28 : 12;
    var linePause   = cur.kind === "prompt" ? 420 : 180;

    if (charIndex < cur.text.length) {
      charIndex += 1;
      render();
      timer = setTimeout(step, typingSpeed);
    } else {
      timer = setTimeout(function () {
        lineIndex += 1;
        charIndex = 0;
        render();
        step();
      }, linePause);
    }
  }

  render();
  step();
})();
