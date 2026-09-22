# Anavind Labs — Official Web Portal

> **Domain**: [anavindlabs.com](https://anavindlabs.com)  
> **Practice**: Independent Systems Research Practice by Aravind Sundaresan  
> **Focus**: LLM Serving Runtimes, GPU Cluster Orchestration, and Training Infrastructure  

An independent lab building, benchmarking, and hardening LLM serving and GPU infrastructure, with every result published openly.

---

## Architecture & Layout

This portal is built as high-performance, dependency-free static web software styled after academic research monographs and systems labs (MIT CSAIL, Alan Turing Institute, Mila):

* **`index.html`**: Homepage featuring the 6-layer end-to-end Systems Stack Visualizer, flagship empirical disclosures, and bio anchor.
* **`research.html`**: Complete technical dossiers for all 6 core systems (`Clairvoyant`, `Kube-Sentinel`, `Aether Control`, `HeteroDisagg`, `Multi-Node-Inference-Lab`, and `ServiceScope`) with measured vs. modeled tables and disconfirmed findings.
* **`upstream.html`**: Direct upstream contributions and patch tracker across `vLLM` and `SGLang` serving engines.
* **`benchmarks.html`**: The Lab's Provenance Protocol, hardware inventory testbeds, and empirical lab notes.
* **`about.html`**: Practice identity, Sanskrit etymology (*Ananta + Vinda*), Research Manifesto, and full 4-stage career track record across Big Tech and independent research.

---

## Local Development

Serve locally using any static HTTP server:

```bash
# Python 3
python3 -m http.server 8080

# Or using Node
npx serve .
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## License

All web portal layouts, documentation, and benchmark disclosures are published under the [MIT License](LICENSE).
