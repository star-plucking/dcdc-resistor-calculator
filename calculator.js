// 电阻标准系列定义
const RESISTOR_STANDARDS = {
    'E6': [1.0, 1.5, 2.2, 3.3, 4.7, 6.8],
    'E12': [1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2],
    'E24': [1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4, 2.7, 3.0, 
            3.3, 3.6, 3.9, 4.3, 4.7, 5.1, 5.6, 6.2, 6.8, 7.5, 8.2, 9.1],
    'E48': [1.00, 1.05, 1.10, 1.15, 1.21, 1.27, 1.33, 1.40, 1.47, 1.54, 
            1.62, 1.69, 1.78, 1.87, 1.91, 1.96, 2.05, 2.15, 2.26, 2.37, 
            2.49, 2.61, 2.74, 2.80, 2.87, 3.01, 3.16, 3.32, 3.48, 3.57, 
            3.65, 3.83, 4.02, 4.22, 4.42, 4.64, 4.87, 5.11, 5.36, 5.62, 
            5.90, 6.19, 6.34, 6.49, 6.81, 7.15, 7.50, 7.87, 8.25, 8.66, 
            9.09, 9.53],
    'E96': [1.00, 1.02, 1.05, 1.07, 1.10, 1.13, 1.15, 1.18, 1.21, 1.24, 
            1.27, 1.30, 1.33, 1.37, 1.40, 1.43, 1.47, 1.50, 1.54, 1.58, 
            1.62, 1.65, 1.69, 1.74, 1.78, 1.82, 1.87, 1.91, 1.96, 2.00, 
            2.05, 2.10, 2.15, 2.21, 2.26, 2.32, 2.37, 2.43, 2.49, 2.55, 
            2.61, 2.67, 2.74, 2.80, 2.87, 2.94, 3.01, 3.09, 3.16, 3.24, 
            3.32, 3.40, 3.48, 3.57, 3.65, 3.74, 3.83, 3.92, 4.02, 4.12, 
            4.22, 4.32, 4.42, 4.53, 4.64, 4.75, 4.87, 4.99, 5.11, 5.23, 
            5.36, 5.49, 5.62, 5.76, 5.90, 6.04, 6.19, 6.34, 6.49, 6.65, 
            6.81, 6.98, 7.15, 7.32, 7.50, 7.68, 7.87, 8.06, 8.25, 8.45, 
            8.66, 8.87, 9.09, 9.31, 9.53, 9.76],
    'E192': [1.00, 1.01, 1.02, 1.03, 1.04, 1.05, 1.06, 1.07, 1.09, 1.10, 
            1.11, 1.13, 1.14, 1.15, 1.17, 1.18, 1.20, 1.21, 1.23, 1.24, 
            1.26, 1.27, 1.29, 1.30, 1.32, 1.33, 1.35, 1.37, 1.38, 1.40, 
            1.42, 1.43, 1.45, 1.47, 1.49, 1.50, 1.52, 1.54, 1.56, 1.58, 
            1.60, 1.62, 1.64, 1.65, 1.67, 1.69, 1.72, 1.74, 1.76, 1.78, 
            1.80, 1.82, 1.84, 1.87, 1.89, 1.91, 1.93, 1.96, 1.98, 2.00, 
            2.03, 2.05, 2.08, 2.10, 2.13, 2.15, 2.18, 2.21, 2.23, 2.26, 
            2.29, 2.32, 2.34, 2.37, 2.40, 2.43, 2.46, 2.49, 2.52, 2.55, 
            2.58, 2.61, 2.64, 2.67, 2.71, 2.74, 2.77, 2.80, 2.84, 2.87, 
            2.91, 2.94, 2.98, 3.01, 3.05, 3.09, 3.12, 3.16, 3.20, 3.24, 
            3.28, 3.32, 3.36, 3.40, 3.44, 3.48, 3.52, 3.57, 3.61, 3.65, 
            3.70, 3.74, 3.79, 3.83, 3.88, 3.97, 4.02, 4.07, 4.12, 4.17, 
            4.22, 4.27, 4.32, 4.37, 4.42, 4.48, 4.53, 4.59, 4.64, 4.70, 
            4.75, 4.81, 4.87, 4.93, 4.99, 5.05, 5.11, 5.17, 5.23, 5.30, 
            5.36, 5.42, 5.49, 5.56, 5.62, 5.69, 5.76, 5.83, 5.90, 5.97, 
            6.04, 6.12, 6.19, 6.26, 6.34, 6.42, 6.49, 6.57, 6.65, 6.73, 
            6.81, 6.90, 6.98, 7.06, 7.15, 7.23, 7.32, 7.41, 7.50, 7.59, 
            7.68, 7.77, 7.87, 7.96, 8.06, 8.16, 8.25, 8.35, 8.45, 8.56, 
            8.66, 8.76, 8.87, 8.98, 9.09, 9.20, 9.31, 9.42, 9.53, 9.65, 
            9.76, 9.88]
};

// 计算最佳电阻组合
function calculateBestResistors(vref, vout_ref, standard) {
    let errorMin = 100.0;
    let bestR1 = 1000.0;
    let bestR2 = 1000.0;
    let bestVout = 0.0;
    
    const series = RESISTOR_STANDARDS[standard];
    const maxTime = series.length;
    
    for (let i = 0; i < maxTime; i++) {
        for (let j = 0; j < 10; j++) { // 电阻值范围：10^0 到 10^9
            const r1Temp = series[i] * Math.pow(10, j);
            
            for (let k = 0; k < maxTime; k++) {
                for (let l = 0; l < 10; l++) { // 电阻值范围：10^0 到 10^9
                    const r2Temp = series[k] * Math.pow(10, l);
                    
                    // 计算输出电压
                    const voutTemp = (r1Temp / r2Temp + 1) * vref;
                    // 计算相对误差
                    const errorTemp = Math.abs(voutTemp - vout_ref) / vout_ref;
                    
                    // 更新最佳结果
                    if (errorTemp < errorMin) {
                        errorMin = errorTemp;
                        bestR1 = r1Temp;
                        bestR2 = r2Temp;
                        bestVout = voutTemp;
                    }
                }
            }
        }
    }
    
    return {
        R1: bestR1,
        R2: bestR2,
        Vout: bestVout,
        Error: errorMin * 100 // 转换为百分比
    };
}

// 格式化电阻值显示 - 改为千欧显示
function formatResistorValue(value) {
    const kOhm = value;
    return kOhm.toFixed(2) + ' kΩ';
}

// 格式化电压值显示
function formatVoltageValue(value) {
    return value.toFixed(4) + ' V';
}

// 格式化误差显示
function formatErrorValue(value) {
    return value.toFixed(4) + '%';
}

// 显示电阻标准系列表格
function displayResistorTable(standard) {
    const tableContainer = document.getElementById('resistor-table');
    const series = RESISTOR_STANDARDS[standard];
    
    // 创建表格头部信息
    const precision = {
        'E6': '±20%',
        'E12': '±10%',
        'E24': '±5%',
        'E48': '±2%',
        'E96': '±1%',
        'E192': '±0.5%'
    };
    
    // 计算每行显示的列数
    const columnsPerRow = Math.min(6, series.length);
    const rows = Math.ceil(series.length / columnsPerRow);
    
    let tableHTML = `
        <div class="series-header">
            ${standard} 系列电阻标准值 (精度: ${precision[standard]})
        </div>
        <table class="resistor-table">
            <tbody>
    `;
    
    // 生成表格内容
    for (let row = 0; row < rows; row++) {
        tableHTML += '<tr>';
        for (let col = 0; col < columnsPerRow; col++) {
            const index = row * columnsPerRow + col;
            if (index < series.length) {
                tableHTML += `<td><span class="resistor-value">${series[index].toFixed(2)}</span></td>`;
            } else {
                tableHTML += '<td>-</td>';
            }
        }
        tableHTML += '</tr>';
    }
    
    tableHTML += '</tbody></table>';
    
    // 添加动画效果
    tableContainer.classList.add('table-fade-in');
    tableContainer.innerHTML = tableHTML;
    
    // 移除动画类
    setTimeout(() => {
        tableContainer.classList.remove('table-fade-in');
    }, 600);
}

// 显示计算结果
function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    
    // 添加成功动画类
    resultsContainer.classList.add('success-animation');
    
    resultsContainer.innerHTML = `
        <div class="result-item">
            <span class="result-label">
                <i class="fas fa-resistor"></i>
                上拉电阻 (R1)
            </span>
            <span class="result-value">${formatResistorValue(results.R1)}</span>
        </div>
        <div class="result-item">
            <span class="result-label">
                <i class="fas fa-resistor"></i>
                下拉电阻 (R2)
            </span>
            <span class="result-value">${formatResistorValue(results.R2)}</span>
        </div>
        <div class="result-item">
            <span class="result-label">
                <i class="fas fa-bolt"></i>
                实际输出电压
            </span>
            <span class="result-value success">${formatVoltageValue(results.Vout)}</span>
        </div>
        <div class="result-item">
            <span class="result-label">
                <i class="fas fa-percentage"></i>
                相对误差
            </span>
            <span class="result-value ${results.Error < 1 ? 'success' : 'error'}">${formatErrorValue(results.Error)}</span>
        </div>
        <div class="result-item">
            <span class="result-label">
                <i class="fas fa-calculator"></i>
                分压比 (R1/R2)
            </span>
            <span class="result-value">${(results.R1 / results.R2).toFixed(4)}</span>
        </div>
    `;
    
    // 移除动画类
    setTimeout(() => {
        resultsContainer.classList.remove('success-animation');
    }, 600);
}

// 显示错误信息
function displayError(message) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `
        <div class="result-placeholder">
            <i class="fas fa-exclamation-triangle" style="color: #e74c3c;"></i>
            <p style="color: #e74c3c;">${message}</p>
        </div>
    `;
}

// 显示加载动画
function showLoading() {
    const button = document.querySelector('.calculate-btn');
    const originalHTML = button.innerHTML;
    
    button.innerHTML = '<span class="loading"></span> 计算中...';
    button.disabled = true;
    
    return function hideLoading() {
        button.innerHTML = originalHTML;
        button.disabled = false;
    };
}

// 主计算函数
async function calculateResistors() {
    // 获取输入值
    const vref = parseFloat(document.getElementById('vref').value);
    const vout = parseFloat(document.getElementById('vout').value);
    const standard = document.getElementById('standard').value;
    
    // 输入验证
    if (isNaN(vref) || vref <= 0) {
        displayError('请输入有效的参考电压 (Vref > 0)');
        return;
    }
    
    if (isNaN(vout) || vout <= 0) {
        displayError('请输入有效的目标输出电压 (Vout > 0)');
        return;
    }
    
    if (vout <= vref) {
        displayError('目标输出电压必须大于参考电压 (Vout > Vref)');
        return;
    }
    
    // 显示加载动画
    const hideLoading = showLoading();
    
    try {
        // 使用 setTimeout 来让UI更新，模拟异步计算
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // 执行计算
        const results = calculateBestResistors(vref, vout, standard);
        
        // 显示结果
        displayResults(results);
        
        // 添加一些用户反馈
        showCalculationFeedback(results);
        
    } catch (error) {
        displayError('计算过程中发生错误，请重试');
        console.error('计算错误:', error);
    } finally {
        hideLoading();
    }
}

// 显示计算反馈
function showCalculationFeedback(results) {
    // 如果误差很小，显示成功提示
    if (results.Error < 0.1) {
        showNotification('计算完成！误差极小，推荐使用此组合。', 'success');
    } else if (results.Error < 1) {
        showNotification('计算完成！误差较小，可以接受。', 'info');
    } else {
        showNotification('计算完成！误差较大，建议选择更高精度的电阻系列。', 'warning');
    }
}

// 显示通知
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // 添加样式
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'warning' ? '#f39c12' : '#3498db'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
        font-weight: 500;
    `;
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 自动移除
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 实时输入验证
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="number"]');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const value = parseFloat(this.value);
            if (isNaN(value) || value <= 0) {
                this.style.borderColor = '#e74c3c';
            } else {
                this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }
        });
        
        // 添加回车键计算功能
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateResistors();
            }
        });
    });
    
    // 添加选择框变化时的提示和表格更新
    const standardSelect = document.getElementById('standard');
    
    // 页面加载时显示默认选择的表格
    displayResistorTable(standardSelect.value);
    
    standardSelect.addEventListener('change', function() {
        const precision = {
            'E6': '±20%',
            'E12': '±10%',
            'E24': '±5%',
            'E48': '±2%',
            'E96': '±1%',
            'E192': '±0.5%'
        };
        
        // 更新电阻表格
        displayResistorTable(this.value);
        
        showNotification(`已选择 ${this.value} 系列电阻 (精度: ${precision[this.value]})`, 'info');
    });
}); 